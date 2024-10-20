import express from 'express';
import { getAllCities, getCityById } from '../controllers/cities/read.js';
import { createCity } from '../controllers/cities/create.js';

let router = express.Router();

// Ruta para obtener todas las ciudades
router.get('/', getAllCities);

// Ruta para obtener una ciudad por su ID
router.get('/:id', getCityById);

// Ruta para crear una nueva ciudad
router.post('/create', createCity);

export default router;