const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = Schema({
    name: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    img: String,
    user: { type: mongoose.Types.ObjectId, required: true, ref: "User" }

})

module.exports = mongoose.model("cart", cartSchema);
// User is a name of Collection in DB