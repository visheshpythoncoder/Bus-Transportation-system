const mongoose = require('mongoose');

const routeschema =new mongoose.Schema({
    routename : {type:String,required:true},
    stopname :[String ],
    school_name :{ type:String ,required : true}

});
const route = mongoose.model("route",routeschema)
module.exports=route;