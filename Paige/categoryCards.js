// ON LOAD event listener here for home page

// 1) document.getElementbyID() and attach to function for CLICK 
document.getElementById('meat').addEventListener("click", function(event){
    getMeat(); 

    document.getElementById('produce').addEventListener("click", function(event){
        getProduce(); 

    document.getElementById('dairy').addEventListener("click", function(event){
        getDairy(); 

    document.getElementById('eggs').addEventListener("click", function(event){
        getEggs(); 

    document.getElementById('herbs').addEventListener("click", function(event){
        getHerbs(); 

    document.getElementById('honey').addEventListener("click", function(event){
        getHoney(); 

    document.getElementById('mushrooms').addEventListener("click", function(event){
        getMushrooms(); 

    document.getElementById('speciality').addEventListener("click", function(event){
        getSpeciality(); 

// 2) async/await include code for fetch calls happening when button is clicked 
//endpoints used 
/* 
/producers/meat 
/producers/produce 
/producers/dairy
/producers/eggs 
/producers/herbs
/producers/honey
/producers/mushrooms
/producers/speciality 
*/ 

async function getMeat(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }

    const response = await fetch("/producer/meat", requestOptions); 

    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 
}; 

function getProduce(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }
    console.log("button was clicked"); 
    const response = await fetch("/producer/produce", requestOptions); 

    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 
}; 

async function getDairy(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }

    const response = await fetch("/producer/dairy", requestOptions); 

    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 

}; 

async function getEggs(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }

    const response = await fetch("/producer/eggs", requestOptions); 

    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 
}; 

async function getHerbs(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }

    const response = await fetch("/producer/herbs", requestOptions); 

    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 
}; 

async function getHoney(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }

    const response = await fetch("/producer/honey", requestOptions); 

    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 
}; 

async function getMushrooms(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }

    const response = await fetch("/producer/mushrooms", requestOptions); 

    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 
}; 

async function getSpeciality(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }

    const response = await fetch("/producer/speciality", requestOptions); 

    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 
}; 