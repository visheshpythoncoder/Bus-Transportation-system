const mongoose = require("mongoose")

const teacherschema = new mongoose.Schema({
    teacherid:{ type: String},
    password:{ type: String},
})

const teacher = mongoose.model("teacher",teacherschema);
module.exports = teacher