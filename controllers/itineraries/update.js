import Itinerary from '../../models/Itinerary.js';

const updateItinerary = async (req, res, next) => {
    try {
        const { id } = req.params;

        const existingItinerary = await Itinerary.findById(id);
        if (!existingItinerary) {
            return res.status(404).json({
                success: false,
                message: "Itinerario no encontrado"
            });
        }

        const updatedItinerary = await Itinerary.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Itinerario actualizado exitosamente",
            response: updatedItinerary
        });

    } catch (error) {
        next(error);
    }
}

export { updateItinerary };