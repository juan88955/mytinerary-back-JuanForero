import Itinerary from '../../models/Itinerary.js';

const createItinerary = async (req, res, next) => {
    try {
        const newItinerary = await new Itinerary(req.body).save();
        const savedItinerary = await newItinerary.save();
        res.status(201).json(newItinerary);
    } catch (error) {
        next(error);
    }
}

export { createItinerary };