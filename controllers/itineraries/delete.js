import Itinerary from '../../models/Itinerary.js';

const deleteItinerary = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const deletedItinerary = await Itinerary.findByIdAndDelete(id);
        
        if (!deletedItinerary) {
            return res.status(404).json({
                success: false,
                message: "Itinerario no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Itinerario eliminado exitosamente",
            response: deletedItinerary
        });

    } catch (error) {
        next(error); 
    }
};

export { deleteItinerary };