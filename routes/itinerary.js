import express from 'express';
import { getAllItineraries, getItineraryById, getItinerariesByCity } from '../controllers/itineraries/read.js';
import { createItinerary } from '../controllers/itineraries/create.js';
import { updateItinerary } from '../controllers/itineraries/update.js';
import { deleteItinerary } from '../controllers/itineraries/delete.js';

let router = express.Router();

router.get('/', getAllItineraries);
router.get('/city/:cityId', getItinerariesByCity);
router.get('/:id', getItineraryById);
router.post('/create', createItinerary);
router.put('/update/:id', updateItinerary);
router.delete('/delete/:id', deleteItinerary);

export default router;