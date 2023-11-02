const mongoose =require('mongoose')

const Schema =mongoose.Schema;

const rentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true
    },
    rent:{
        type:Number,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    image:{
         type:String,
         required:true
    }
});

module.exports =mongoose.model("rent",rentSchema)