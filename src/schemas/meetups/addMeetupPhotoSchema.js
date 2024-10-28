import joi from 'joi';

// Importamos el esquema que verifica una imagen
import imgSchema from '../imgSchema.js';

// Esquema donde comprobamos todas las propiedades necesarias.
const addMeetupPhotoSchema = joi.object({
    photo: imgSchema.required(),
});

export default addMeetupPhotoSchema;
