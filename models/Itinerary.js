import { Schema, model } from "mongoose";

let collection = "Itinerary";

let itinerarySchema = new Schema({
    cityId: {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    author: {
        name: { type: String, required: true },
        photo: { type: String, required: true }
    },
    price: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        default: 0,
        required: true
    },
    hashtags: [{ type: String }]
}, {
    timestamps: true,
});

let Itinerary = model(collection, itinerarySchema);
export default Itinerary;