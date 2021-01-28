//creates interface to mongoose module built in from node js 
const mongoose = require('mongoose');

//creating a variable that can be reused to make mongoose schema possible 
const Schema = mongoose.Schema;  

//create schema for PRODUCERS (WHO) on map  
const producerSchema = new Schema({
    //properties to FILTER SEARCH W/
    name : String, 
    //WILL DISPLAY BY TYPE 
    productType : [String],
    
    products : [String], 

    productLocation : String, 
    zipCode : String, 

    phoneNumber : String, 
    email : String, 

    facebook : String, 
    link : String, 

    notes : String, 
    openingYear : String, 

    //WILL DISPLAY BY SERVICE if true 
    directOrderOnline : Boolean, 
    csaOrSubs : Boolean, 
    farmerMarket : Boolean, 
    farmerMarketNames : [String], 
    upick : Boolean, 
    wholesale : Boolean, 
    linkToWholesale : String, 
    kcDelivery : Boolean, 
    sellOnFarm : Boolean, 
   
})

module.exports = mongoose.model("producer", producerSchema);


