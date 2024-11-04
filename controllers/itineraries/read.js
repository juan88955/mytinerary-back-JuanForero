import Itinerary from '../../models/Itinerary.js';

let getAllItineraries = async (req, res, next) => {
    try {
        const allItineraries = await Itinerary.find();
        return res.status(200).json({
            response: allItineraries
        });
    } catch (error) {
        next(error);
    }
};

let getItineraryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const itinerary = await Itinerary.findById(id);
        return res.status(200).json({
            response: itinerary
        });
    } catch (error) {
        next(error);
    }
};

const getItinerariesByCity = async (req, res) => {
    try {
        const { cityId } = req.params;

        const itineraries = await Itinerary.find({ cityId: cityId })
            .populate('author')
            .lean();
        return res.status(200).json({
            response: itineraries,
            success: true,
            message: "Itinerarios encontrados"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener itinerarios"
        });
    }
}

export { getAllItineraries, getItineraryById, getItinerariesByCity };
