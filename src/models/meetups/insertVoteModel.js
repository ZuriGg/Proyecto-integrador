import getPool from '../../database/getPool.js';
import { voteAlreadyExistsError } from '../../services/errorService.js';

const insertVoteModel = async (value, coment, userId, attendanceId) => {
    try {
        //creamos pool de conexiones
        const pool = await getPool();

        //verificar si el voto ya existe
        const [existingVote] = await pool.query(
            `SELECT * FROM meetupVotes WHERE attendanceId = ? AND userId = ?`,
            [attendanceId, userId] // Asegúrate de que los parámetros estén dentro de la misma array
        );

        if (existingVote.length > 0) {
            throw voteAlreadyExistsError();
        }

        //creamos la query para insertar el voto
        const query = `
       INSERT INTO meetupVotes (value, coment, userId, attendanceId) VALUES (?, ?, ?, ?)
       `;

        //insertamos el voto en la BBDD
        const [result] = await pool.query(query, [
            value,
            coment,
            userId,
            attendanceId,
        ]);

        // Devolvemos el voto insertado usando el insertId del resultado
        return {
            id: result.insertId,
            value,
            coment,
            userId,
            attendanceId,
        };
    } catch (error) {
        throw error;
    }
};

export default insertVoteModel;

//insertId --> propiedad del objeto de resultado que devuelve MySQL después de una operación INSERT. Es el ID generado automáticamente por la BBDD para la nueva fila insertada, siempre que esa tabla tenga una columna configurada como AUTO_INCREMENT.
