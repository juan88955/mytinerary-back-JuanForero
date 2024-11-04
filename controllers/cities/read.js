import City from '../../models/City.js';

const getAllCities = async (req, res, next) => {
    try {
        let { name } = req.query;
        let query = {};
        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' };
        }

        let allCities = await City.find(query);
        res.json({
            success: true,
            response: allCities
        });
    } catch (error) {
        next(error);
    }
};

const getCityById = async (req, res, next) => {
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

export { getAllCities, getCityById };