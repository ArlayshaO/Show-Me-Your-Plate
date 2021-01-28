//MONGODB unique link from Atlas here to host server 
const mongoose = require('mongoose');
const mongoDB = 'Atlas DB Copy+Paste string here'; 

//variable here: store and give access to MODELS 
var producer = require('./Paige/producer.js');
var product = require('./Paige/product.js'); 

//might not need separate schema for product TYPE (delete variable if include in PRODUCTS schema properties)
var productType = require('./Paige/productType.js'); 

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database'); 
}); 

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function(){
    //check terminal after command node fileName.js 
    console.log("We're connected");
}); 
