const mongoose = require('mongoose'); 
const fs = require('fs'); 

const mongoDB = process.env.MONGO_STRING; 

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database'); 
}); 

const db = mongoose.connection;
//open a connection to the database 
db.once('open', function(){

}

//need DB connection string 

//SCHEMA here 
const producersSchema = new Schema ({

            "name": String,
            "productType": String,
            "products": String,
            "zipCode": String,
            "productLocation": String,
            //long/lat added columns 
            "phoneNumber": String,
            "email": String,
            "facebook": String,
            "link": String,
            "openingYear": String,
            "directOrderOnline": Boolean,
            "csaOrSubscript": Boolean,
            "farmerMarket": Boolean,
            "farmerMarketNames": Boolean,
            "uPick": Boolean,
            "wholesale": Boolean,
            "linkToWholesale": String, 
            "kcDelivery": Boolean,
            "sellOnFarm": Boolean,
            "notes": String,
            "main sales": String, 
        }
);

producersModel = mongoose.model("Producers", producersSchema);

let fileStr = fs.readFileSync("producers.json", 'utf8'); 
console.log(fileStr); 
let producerData = JSON.parse(fileStr); 
console.log(producerData); 

fs.open("producers.json", 'r', function(err, fd){

});