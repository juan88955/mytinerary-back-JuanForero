import {Schema, model} from "mongoose"

let collection = "cities"

// Definición de esquema
let citySchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    description: { type: String, required: true },
    currency: { type: String, required: true },
    languages: { type: String, required: true },
    population: { type: Number, required: true },
    capital: { type: String, required: true },
}, {
    timestamps: true,
})

// Modelo de MongoDB
let City = model(collection, citySchema)

export default City