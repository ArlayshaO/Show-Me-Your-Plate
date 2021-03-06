const mongoose = require('mongoose'); 
const fs = require('fs'); 
require('dotenv').config();


//const mongoDB = "mongodb+srv://Capstone:Farmer123@cluster0.8xd2d.mongodb.net/capstone?retryWrites=true&w=majority"; 


const mongoDB = process.env.MONGO_STRING; 

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
            "mainProductType": String, 
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


//SCHEMA here 

let fileStr = fs.readFileSync("producersFinal.json", 'utf8'); 
fileStr = fileStr.replace(/^\uFEFF/,'');


let producerData = JSON.parse(fileStr); 
//console.log(producerData); 
//console.log(typeof(producerData)); 
for(let i=0; i<producerData.producers.length; i++){
if(producerData.producers[i].longitude == "FALSE" || producerData.producers[i].latitude == "FALSE"){
    producerData.producers[i].longitude = 0; 
    producerData.producers[i].latitude = 0; 
};     



//STRINGS TO BOOLEANS  

//strings to booleans 


//direct order online: 
if(producerData.producers[i].directOrderOnline == "TRUE"){
    producerData.producers[i].directOrderOnline = true; 
}
else if (producerData.producers[i].directOrderOnline == "FALSE"){
    producerData.producers[i].directOrderOnline = false;
}; 

//csa: 
if(producerData.producers[i].csaOrSubscript == "TRUE"){
    producerData.producers[i].csaOrSubscript = true; 
} 
else if (producerData.producers[i].csaOrSubscript == "FALSE"){
    producerData.producers[i].csaOrSubscript = false;
};
    
//farmers market: 
if(producerData.producers[i].farmerMarket == "TRUE"){
    producerData.producers[i].farmerMarket = true; 
}
else if (producerData.producers[i].farmerMarket == "FALSE"){
    producerData.producers[i].farmerMarket = false;
};

//uPick: 
if(producerData.producers[i].uPick == "TRUE"){
    producerData.producers[i].uPick = true; 
}
else if (producerData.producers[i].uPick == "FALSE"){
    producerData.producers[i].uPick = false;
}; 

//wholesale: 
if(producerData.producers[i].wholesale == "TRUE"){
    producerData.producers[i].wholesale = true; 
}
else if (producerData.producers[i].wholesale == "FALSE"){
    producerData.producers[i].wholesale = false;
}; 

//delivery: 
if(producerData.producers[i].kcDelivery == "TRUE"){
    producerData.producers[i].kcDelivery = true; 
}
else if(producerData.producers[i].kcDelivery == "FALSE"){
    producerData.producers[i].kcDelivery = false;
}; 

//sell on farm: 
if(producerData.producers[i].sellOnFarm == "TRUE"){
    producerData.producers[i].sellOnFarm = true; 
}
else if(producerData.producers[i].sellOnFarm == "FALSE"){
    producerData.producers[i].sellOnFarm = false;

}; 

let tmp = new producersModel(producerData.producers[i]); 
tmp.save(function(err, producer){
    if(err){
        console.log(err);
    }
   
}); 
}


