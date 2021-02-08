//creates interface to mongoose module built in from node js 
const mongoose = require('mongoose');

//creating a variable that can be reused to make mongoose schema possible 
const Schema = mongoose.Schema;  

//create schema for PRODUCERS (WHO) on map  
const Producers = new Schema({
    name: String,
    mainProductType: String, 
    productType: String,
    products: String,
    zipCode: String,
    productLocation: String,
    latitude: Number, 
    longitude: Number, 
    phoneNumber: String,
    email: String,
    facebook: String,
    link: String,
    openingYear: String,
    directOrderOnline: Boolean,
    csaOrSubscript: Boolean,
    farmerMarket: Boolean,
    farmerMarketNames: String,
    uPick: Boolean,
    wholesale: Boolean,
    linkToWholesale: String, 
    kcDelivery: Boolean,
    sellOnFarm: Boolean,
    notes: String,
})

module.exports = mongoose.model("producers", Producers);


