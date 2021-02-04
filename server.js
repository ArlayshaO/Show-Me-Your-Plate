const mongoose = require('mongoose');
//var Resource = require('./models/resource.js'); 
//var resourceItem = require('./models/resourceItem.js'); 
//Load in the express module
const express = require('express');  
const path = require('path');
require('dotenv').config();

//creates a new express application 
const app = express(); 
//declare the port we want to connect to 
const port = 3000; 
//instead of string-mongo connection string
const mongoDB = process.env.MONGO_STRING; 
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) return console.error(err);
    console.log('Connected to database'); 
}); 
const db = mongoose.connection;
//open a connection to the database 
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

//use just says, use the following middleware: 
app.use(
    //express.static: is middleware for delivering static files
    //like html, css, javascript, images, etc. 
    express.static(
        //basically this just takes care of relative paths 
        path.join(__dirname, 'public')
        )
    );

//middleware to handle request processing 
app.use(express.json());
app.use(express.urlencoded({ extended:false })); 

//opening up our server to listen on a specific ip address and port 
//ip addresses are also known as hostnames 
var server = app.listen(port, function(){
    console.log("The server is running at port " + port); 
});
//api call to get map
app.get("/api/tpk/maps", function(req,res) { 
    /* error checking probably */ 
    res.send({data:process.env.MAPS_API_KEY}); 
}); 

app.get('/producers', function(request, response){
    /*get data*/ 
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 
      
app.get('/producers/meat', function(request, response){
    /*get data*/ 
                    //variable for parsed object
    /*for(let i=0; i<producerData.producers.length; i++){
        
        //variable for parsed object.producers[i]
        producerData.producers[i].mainProductType == "Meat"
        
        //variable for parsed object
        producerData.producers[i].productType.includes("Meat"); 
    }*/
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/producers/produce', function(request, response){
    /*get data*/ 
                      //variable for parsed object
    /*for(let i=0; i<producerData.producers.length; i++){
        
        //variable for parsed object.producers[i]
        producerData.producers[i].mainProductType == "Produce"
        
        //variable for parsed object
        producerData.producers[i].productType.includes("Produce"); 
    }*/
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/producers/dairy', function(request, response){
    /*get data*/ 
                      //variable for parsed object
    /*for(let i=0; i<producerData.producers.length; i++){
        
        //variable for parsed object.producers[i]
        producerData.producers[i].mainProductType == "Dairy"
        
        //variable for parsed object
        producerData.producers[i].productType.includes("Dairy"); 
    }*/
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/producers/eggs', function(request, response){
    /*get data*/ 
                      //variable for parsed object
    /*for(let i=0; i<producerData.producers.length; i++){
        
        //variable for parsed object.producers[i]
        producerData.producers[i].mainProductType == "Eggs"
        
        //variable for parsed object
        producerData.producers[i].productType.includes("Eggs"); 
    }*/
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/producers/herbs', function(request, response){
    /*get data*/ 
                      //variable for parsed object
    /*for(let i=0; i<producerData.producers.length; i++){
        
        //variable for parsed object.producers[i]
        producerData.producers[i].mainProductType == "Herbs"
        
        //variable for parsed object
        producerData.producers[i].productType.includes("Herbs"); 
    }*/
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/producers/mushrooms', function(request, response){
    /*get data*/ 
                      //variable for parsed object
    /*for(let i=0; i<producerData.producers.length; i++){
        
        //variable for parsed object.producers[i]
        producerData.producers[i].mainProductType == "Mushrooms"
        
        //variable for parsed object
        producerData.producers[i].productType.includes("Mushrooms"); 
    }*/
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/producers/honey', function(request, response){
    /*get data*/ 
                      //variable for parsed object
    /*for(let i=0; i<producerData.producers.length; i++){
        
        //variable for parsed object.producers[i]
        producerData.producers[i].mainProductType == "Honey"
        
        //variable for parsed object
        producerData.producers[i].productType.includes("Honey"); 
    }*/
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/producers/speciality', function(request, response){
    /*get data*/ 
                      //variable for parsed object
    /*for(let i=0; i<producerData.producers.length; i++){
        
        //variable for parsed object.producers[i]
        producerData.producers[i].mainProductType == "Speciality"
        
        //variable for parsed object
        producerData.producers[i].productType.includes("Speciality"); 
    }*/
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/producers/delivery', function(request, response){
    /*get data*/ 
    
    /*for(let i=0; i<producerData.producers.length; i++){
        //if(producersData.producers.delivery[i] == true){
            code block saves array of all delivery TRUEs to display at endpoint 
        }
    }*/

    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/producers/orderOnline', function(request, response){
    /*get data*/ 
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/producers/csa', function(request, response){
    /*get data*/ 
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/markets', function(request, response){
    /*get data*/ 
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/resources', function(request, response){
    /*get data*/ 
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

app.get('/services', function(request, response){
    /*get data*/ 
    console.log(request.query); 
    Producer.find(function(err, items){
            if (err) return console.error(err);
            response.statusCode = 200; 
            response.send(items); 
    })    
}); 

module.exports = server; 