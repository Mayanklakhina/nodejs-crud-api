const mongoose = require('mongoose');


const programmerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    tech : {
        type : String,
        required : true
    },
    address : {
        type : String
    },
    contactNo : {
        type : Number,
        required : true,
        unique : true
    },
    employed : {
        type : Boolean,
        required : true,
        default : false
    }

}, 
{timestamps : true}
)

module.exports = mongoose.model('Programmer', programmerSchema);