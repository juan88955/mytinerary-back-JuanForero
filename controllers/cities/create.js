import City from '../../models/City.js';

const createCity = async (req, res, next) => {
    try {
        const newCity = new City(req.body);
        const savedCity = await newCity.save();
        res.status(201).json(newCity);
    } catch (error) {
        next(error);
    }
};

export { createCity };