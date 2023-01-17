const mongoose = require('mongoose'); 
const Productsh= new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
});

module.exports = mongoose.model('Products',Productsh); 