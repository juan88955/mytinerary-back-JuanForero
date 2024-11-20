import express from 'express';
import cityRouter from './city.js';
import itineraryRouter from './itinerary.js';
import authRouter from './auth.js'
import routerUsers from './user.js'

let router = express.Router();

router.use('/cities', cityRouter);
router.use('/itineraries', itineraryRouter);
router.use('/auth', authRouter)
router.use('/users', routerUsers)

export default router;