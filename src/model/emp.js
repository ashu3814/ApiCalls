const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    email:{
        type:String,
        required : true,
        unique:[true,"email Already Exits"], 
    },
    phone:{
        type:Number,
        required: true,
        unique:true
    }
});

//CREATE A COLLECTION USING MODEL

const empcollection = new mongoose.model('empdatas',empSchema );

module.exports = empcollection;






