const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
        Unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    Branch:{
        type:String,
        required:true,
    },
    CourseDuration:{
        type:String,
        required:true,
    },
    
    courseCode:{
        type:String,
        required:true,
        Unique:true,
      
    },
    fees:{
        type:Number,
        required:true,
    },

},
{timestamps:true});

module.exports=new mongoose.model("Course",courseSchema)