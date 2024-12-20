import nodemailer from 'nodemailer';

import { sendEmailError } from '../services/errorService.js';

import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from '../../env.js';

// Creamos un transporte para poder enviar emails con nodemailer.
const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    /* secure: true, */
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false, // Ignorar la validación de certificados
    },
});

// enviamos un mail a un usuario.
const sendMailUtil = async (email, subject, body) => {
    try {
        const mailOptions = {
            from: SMTP_USER,
            to: email,
            subject,
            html: body,
        };

        await transport.sendMail(mailOptions);
    } catch (err) {
        console.error('Error al enviar correo:', err);
        sendEmailError(err.message || 'Error desconocido al enviar correo');
        throw err;
    }
};

export default sendMailUtil;
