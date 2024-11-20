import { Schema, model } from "mongoose";

let collection = "users";

let userSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: false, default: "" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: false, default: "Mexico" },
    photo: { type: String, default: "" },
    online: { type: Boolean, default: false },
    role: { type: Number, default: 1 }
}, {
    timestamps: true
});

let User = model(collection, userSchema);
export default User;
