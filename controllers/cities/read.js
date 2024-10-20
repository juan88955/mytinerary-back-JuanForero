import City from '../../models/City.js';

// Función para obtener todas las ciudades
export const getAllCities = async (req, res, next) => {
    try {
        let allCities = await City.find();
        res.json({
            success: true,
            response: allCities
        });
    } catch (error) {
        next(error);
    }
};

// Función para obtener una ciudad por su ID
export const getCityById = async (req, res, next) => {
    try {
        let cityId = req.params.id;
        let city = await City.findById(cityId);
        
        if (city) {
            res.json({
                success: true,
                response: city
            });
        }
    } catch (error) {
        next(error);
    }
};