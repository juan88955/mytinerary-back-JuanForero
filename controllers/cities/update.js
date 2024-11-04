import Itinerary from '../../models/City.js';

const updateCity = async (req, res, next) => {
    try {
        let user = req.body;

        let updateCity = await Itinerary.updateOne(
            { _id: user._id },
            { itnery: user.itnery }
        );

        return res.status(200).json({
            response: updateCity
        });
    } catch (error) {
        next(error);
    }
};

export { updateCity };