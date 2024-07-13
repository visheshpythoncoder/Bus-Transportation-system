const mongoose = require('mongoose');

// Define a schema and model for the log in page
const formSchema = new mongoose.Schema({
    form1: {
        name: String,
        college_id: String,
        age:Number,
        gender:String,
        school_name:String,
        phone:Number,
        email:String
    },
    form2: {
      routename: String,
      stopname: String,
        
    },
    form3: {
      selectedBus: String,
        
    },
  });
const student = mongoose.model('student', formSchema);

module.exports=student;