const mongoose = require('mongoose'); 
const fs = require('fs'); 

const mongoDB = "mongodb+srv://Capstone:Farmer123@cluster0.8xd2d.mongodb.net/capstone?retryWrites=true&w=majority"; 
console.log(mongoDB); 

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database'); 
}); 

const db = mongoose.connection;
//open a connection to the database 
db.on("error", console.error.bind(console, "MongoDB connection error: "));
//SCHEMA here 
const producersSchema = new mongoose.Schema ({

            "name": String,
            "productType": String,
            "products": String,
            "zipCode": String,
            "productLocation": String,
            "latitude": Number, 
            "longitude": Number, 
            "phoneNumber": String,
            "email": String,
            "facebook": String,
            "link": String,
            "openingYear": String,
            "directOrderOnline": Boolean,
            "csaOrSubscript": Boolean,
            "farmerMarket": Boolean,
            "farmerMarketNames": String,
            "uPick": Boolean,
            "wholesale": Boolean,
            "linkToWholesale": String, 
            "kcDelivery": Boolean,
            "sellOnFarm": Boolean,
            "notes": String,
        }
)

producersModel = mongoose.model("producers", producersSchema);

let fileStr = fs.readFileSync("producers.json", 'utf8'); 
let producerData = JSON.parse(fileStr); 
//console.log(producerData); 
console.log(typeof(producerData)); 
for(let i=0; i<producerData.producers.length; i++){
if(producerData.producers[i].longitude == "FALSE" || producerData.producers[i].latitude == "FALSE"){
    producerData.producers[i].longitude = 0; 
    producerData.producers[i].latitude = 0; 
};     
if(producerData.producers[i].directOrderOnline == "TRUE"){
    producerData.producers[i].directOrderOnline = true; 
}; 
if(producerData.producers[i].csaOrSubscript == "TRUE"){
    producerData.producers[i].csaOrSubscript = true; 
}; 
if(producerData.producers[i].farmerMarket == "TRUE"){
    producerData.producers[i].farmerMarket = true; 
}; 
if(producerData.producers[i].uPick == "TRUE"){
    producerData.producers[i].uPick = true; 
}; 
if(producerData.producers[i].wholesale == "TRUE"){
    producerData.producers[i].wholesale = true; 
}; 
if(producerData.producers[i].kcDelivery == "TRUE"){
    producerData.producers[i].kcDelivery = true; 
}; 
if(producerData.producers[i].sellOnFarm == "TRUE"){
    producerData.producers[i].sellOnFarm = true; 
}; 

let tmp = new producersModel(producerData.producers[i]); 
tmp.save(function(err, producer){
    if(err){
        console.log(err);
    }
   
}); 
}

