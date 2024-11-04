import express from 'express';
import cityRouter from './city.js';
import itineraryRouter from './itinerary.js';

let router = express.Router();

router.use('/cities', cityRouter);
router.use('/itineraries', itineraryRouter);

export default router;