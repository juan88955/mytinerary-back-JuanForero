import express from 'express';
import cityRouter from './city.js';

let router = express.Router();

router.use('/cities', cityRouter);

export default router;