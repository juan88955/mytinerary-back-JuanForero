import Itinerary from "../../models/City.js";

let deleteCity = async (req, res, next) => {
    try {
        let deleteItinerary = await Itinerary.deleteOne({
            title: req.body.title
        })
        return res.status(200).json({
            response: deleteItinerary
        })

    } catch (error) {
        next(error)
    }
}


export { deleteCity }