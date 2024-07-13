const mongoose = require('mongoose');


//schema define for transportpage2
const page2Schema = new mongoose.Schema({
    driver_name : { type: String , required:true },
    route_name:{ type: String ,required:true },
    bus_type:{ type: String ,required:true },
    capacity:{type:Number,required:true},
    description:{type:String ,required:true}
  });
const add_bus = mongoose.model('add_bus', page2Schema);
module.exports=add_bus;