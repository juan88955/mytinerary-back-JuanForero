import express from 'express';
import { getAllCities, getCityById } from '../controllers/cities/read.js';
import { createCity } from '../controllers/cities/create.js';
import { updateCity } from '../controllers/cities/update.js';
import { deleteCity } from '../controllers/cities/delete.js';

let router = express.Router();

router.get('/', getAllCities);
router.get('/:id', getCityById);
router.post('/create', createCity);
router.put('/update/:id', updateCity);
router.delete('/delete/:id', deleteCity);

export default router;