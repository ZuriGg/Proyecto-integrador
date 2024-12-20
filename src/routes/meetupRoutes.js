import express from 'express';

import {
    canEditController,
    meetupExists,
    authUser,
    canValidate,
} from '../middlewares/index.js';

import {
    cancelMeetUpRegistrationController,
    deleteMeetupController,
    /*     deletePhotoController, */
    editMeetupController,
    listMeetUpController,
    meetUpCategoryController,
    newMeetupController,
    inscriptionDateMeetupController,
    getMeetupController,
    validateMeetupController,
    newVoteController,
    invalidDayMeetupController,
    getLocationController,
    listAttendanceController,
    getListVotesController,
    newPhotoMeetupController,
    listMeetupPhotoController,
} from '../controllers/meetups/index.js';

const meetUpRouter = express.Router();

//crea un meetup
meetUpRouter.post('/meetups', authUser, newMeetupController);

//Agrega imagenes a un meetup
meetUpRouter.put(
    '/meetups/:meetupId/photo/:photoId',
    authUser,
    meetupExists,
    canEditController,
    newPhotoMeetupController
);

// Obtiene las imagenes de un meetup
meetUpRouter.get(
    '/meetups/:meetupId/photos',
    meetupExists,
    listMeetupPhotoController
);

//edita un meetup
meetUpRouter.put(
    '/meetups/edit/:meetupId',
    authUser,
    meetupExists,
    canEditController,
    editMeetupController
);

//muestra todas las entradaas
meetUpRouter.get('/meetups', listMeetUpController);

//muestra una entrada en concreta
meetUpRouter.get('/meetups/:meetupId', meetupExists, getMeetupController);

//muestra una localización en concreto
meetUpRouter.get('/location/:locationId', getLocationController);

//endpoint que muestra la categoría
meetUpRouter.get('/categories', meetUpCategoryController);

// Inscripcion a un meetup
meetUpRouter.post(
    '/meetups/:meetupId/inscription',
    authUser,
    meetupExists,
    inscriptionDateMeetupController
);

// Lista de asistencias de un usuario
meetUpRouter.get('/attendance', authUser, listAttendanceController);

// cancela inscripcion meetup
meetUpRouter.delete(
    '/meetups/:meetupId/registration',
    cancelMeetUpRegistrationController
);

// cancela fecha meetup establecida
meetUpRouter.put(
    '/attendance/:attendanceId/outservice',
    authUser,
    invalidDayMeetupController
);

// borra una entrada
meetUpRouter.delete(
    '/meetups/:meetupId',
    authUser,
    meetupExists,
    canEditController,
    deleteMeetupController
);

/* meetUpRouter.delete(
    '/meetups/:meetupId/photos/:photoId',
    authUser,
    meetupExists,
    canEditController,
    deletePhotoController
); */

// Endpoint de validación de meetup (Establecerlo como público, verificado por un admin)
meetUpRouter.put(
    '/meetups/:meetupId/validate',
    authUser,
    meetupExists,
    canEditController, // Middleware para saber si el usuario puede editar el meetup
    canValidate, // Middleware para saber si el usuario es administrador y puede validar el meetup (Establecerlo público)
    validateMeetupController
);

//endpoint de rating (1-5) y comentario de un meetup después de la fecha de realización
meetUpRouter.post(
    '/meetups/:attendanceId/votes',
    authUser, // que el usuario esté autenticado
    newVoteController
);

//Ruta para obtener todas las valoraciones de un meetup //UNDER CONSTRUCTION
meetUpRouter.get('/votesMeetup', getListVotesController);

export default meetUpRouter;
