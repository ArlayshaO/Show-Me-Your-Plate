const mongoose = require('mongoose'); 

const mongoDB = process.env.MONGO_STRING; 
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database'); 
}); 
const db = mongoose.connection;
//open a connection to the database 
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

//need DB connection string 

//SCHEMA here 

    name : String, 
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

    directOrderOnline : Boolean, 
    csaOrSubs : Boolean, 
    farmerMarket : Boolean, 
    farmerMarketNames : [String], 
    upick : Boolean, 
    wholesale : Boolean, 
    linkToWholesale : String, 
    kcDelivery : Boolean, 
    sellOnFarm : Boolean, 