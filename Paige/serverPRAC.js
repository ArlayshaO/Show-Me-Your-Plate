// const mongoose = require('mongoose');
// var Producer = require('./producerPRAC.js'); 
// //Load in the express module
// const express = require('express');  
// const path = require('path');

// //creates a new express application 
// const app = express(); 
// //declare the port we want to connect to 
// const port = 3000; 

// const mongoDB = 'mongodb+srv://Capstone:Farmer123@cluster0.8xd2d.mongodb.net/capstone?retryWrites=true&w=majority'; 
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
//     if(err) return console.error(err); 
//     console.log('Connected to database'); 
// }); 
// const db = mongoose.connection;
// //open a connection to the database 
// db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// //use just says, use the following middleware: 
// app.use(
//     //express.static: is middleware for delivering static files
//     //like html, css, javascript, images, etc. 
//     express.static(
//         //basically this just takes care of relative paths 
//         path.join(__dirname, 'public')
//         )
//     );

// //middleware to handle request processing 
// app.use(express.json());
// app.use(express.urlencoded({ extended:false })); 

// //opening up our server to listen on a specific ip address and port 
// //ip addresses are also known as hostnames 
// var server = app.listen(port, function(){
//     console.log("The server is running at port " + port); 
// });






// //app.get('/producers/:prodcutType, function(request, response){
//     //do what we want on the server side
//    Producer.findById(request.params.productType, function(err, item){
//        if(err){ console.log(err); response.sendStatus(500); }
//        response.send(producer); 
//     }); 
// }); 

