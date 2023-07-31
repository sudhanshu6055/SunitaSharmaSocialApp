const mongoose = require("mongoose");

const AppSchema = new mongoose.Schema({
    Name :{
        type:String,
      
        description:String,
        
    },
    age :{
        type: Number,
    },
    description :{
        type:String,
    },
    fintness:{
        name: String,
      description: String,
      benifit: String,
    },
    emergency :{
        name:String,
        No:Number,
        description:String,
    },
    fname :{
     type:String,
    },
    lname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    comment:{
        type:String,
        required:true,
    }


})
const Submit = new mongoose.model("Contact-Us" ,AppSchema);
module.exports = Submit;