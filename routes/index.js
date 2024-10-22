import express from 'express';
import cityRouter from './city.js';

// Importa las rutas de los controladores
let router = express.Router();

// Ruta principal
router.use('/cities', cityRouter);

export default router;