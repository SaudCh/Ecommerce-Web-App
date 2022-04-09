const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userschema = Schema({
    name: { type: String },
    password: { type: String },
    id: { type: String },
    email: { type: String },

})

module.exports = mongoose.model("User", userschema);
// User is a name of Collection in DB