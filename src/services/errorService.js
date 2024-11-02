//AGREGAR PATH DEL ERRORRRRRRRRRRRRRRRR!

import path from 'path';

export const cannotVoteOwnMeetupError = () => {
    throw {
        httpStatus: 403, // Forbidden
        code: 'CANNOT_VOTE_OWN_ENTRY',
        message: 'No puedes votar tu propio meetup',
    };
};

export const deleteFileError = () => {
    const error = new Error('error email, o contraseña incorrecta', path);
    error.httpStatus = path;
    return error;
};

export const emailAlreadyRegisteredError = () => {
    const error = new Error('error email, o contraseña incorrecta', path);
    error.httpStatus = path;
    (error.httpStatus = '409'), // Conflict
        (error.code = 'EMAIL_ALREADY_REGISTERED');
    return error;
};

export const invalidCredentialsError = () => {
    const error = new Error('error email, o contraseña incorrecta', path);
    error.httpStatus = path;
    return error;
};

export const invalidTokenError = () => {
    const error = new Error('error en el token', path);
    error.httpStatus = path;
    return error;
};

export const notAuthenticatedError = () => {
    throw {
        httpStatus: 401, // Unauthorized
        code: 'NOT_AUTHENTICATED',
        message: `Debes enviar un token en el header 'Authorization'`,
    };
};

export const notFoundError = (resource) => {
    throw {
        httpStatus: 404, // Not Found
        code: 'RESOURCE_NOT_FOUND',
        message: `El recurso requerido '${resource}' no existe`,
    };
};

export const pendingActivationError = () => {
    const error = new Error('error email, o contraseña incorrecta', path);
    error.httpStatus = path;
    return error;
};

export const photoLimitReachedError = () => {
    throw {
        httpStatus: 409, // Conflict
        code: 'PHOTO_LIMIT_REACHED',
        message: 'Se ha alcanzado el límite de tres fotos en el meetup',
    };
};

export const recoveryCodeError = () => {
    throw {
        httpStatus: 401, // Unauthorized
        code: 'INVALID_RECOVERY_CODE',
        message: 'Código de recuperación incorrecto',
    };
};

export const saveFileError = () => {
    throw {
        httpStatus: 500, // Internal Server Error
        code: 'FILE_SAVE_FAILED',
        message: 'Error al guardar el archivo en el disco',
    };
};

export const sendEmailError = () => {
    throw {
        httpStatus: 500, // tipo de error --> Internal server error
        code: 'SEND_EMAIL_FAILED', //identificador para el tipo de error
        message: 'Error al enviar email', //mensaje que se mostrará al usuario
    };
};

export const userAlreadyRegisteredError = () => {
    throw {
        httpStatus: 409, // Conflict
        code: 'USER_ALREADY_REGISTERED',
        message: 'El nombre de usuario ya está registrado',
    };
};

export const unauthorizedUserError = () => {
    throw {
        httpStatus: 409, // Conflict
        code: 'UNAUTHORIZED',
        message: 'El usuario no está autorizado para hacer esta operación',
    };
};

export const voteAlreadyExistsError = () => {
    throw {
        httpStatus: 409, // Conflict
        code: 'VOTE_ALREADY_EXISTS',
        message:
            'No se puede votar más de una vez la misma asistencia a un meetup',
    };
};
