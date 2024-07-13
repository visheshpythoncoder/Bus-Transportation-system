const mongoose = require('mongoose');

// Define a schema and model for the log in page
const dataSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email:{ type: String, required: true },
    phone:{ type: String, required: true },
    password1:{ type: String, required: true }, 
  });
const Data = mongoose.model('Data', dataSchema);
module.exports=Data;