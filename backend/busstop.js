const mongoose = require('mongoose');

// schema define for transportpage1
const page1Schema = new mongoose.Schema({
    stopname: { type: String ,required:true },
    geolocation:{ type: String,required:true },
    distance:{ type: String,required:true },
  });

const Busstop = mongoose.model('Busstop', page1Schema);
 module.exports=Busstop;