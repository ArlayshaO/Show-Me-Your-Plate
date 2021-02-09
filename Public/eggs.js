document.addEventListener("load", function(event){getEggs()}); 

function getEggs(){
    //produceRequest() returns body 
    //also tried fetch('/producers/produce).then
    eggsRequest().then(function(body){
        console.log(body); 
            let tr = '';
            let tableBody = document.querySelector('#table_id');
            body.forEach(function(value) {
                //map code 
                new google.maps.Marker({
                    position: {  lat: value.latitude, lng: value.longitude},
                    map,
                    title: value.name
                })

                //list code 
                //let div = document.createElement('div');
                let tr = document.createElement('tr');
                tr.innerHTML = value.name;
                tableBody.appendChild(tr);
                tr = document.createElement('tr');
                tr.innerHTML = value.email;
                tr.style.color = "red"; 
                //div.appendChild(tr);
                tableBody.append(tr)
            });
      
    }).catch(function(error){
        console.log(error); 
    }); 
}

async function eggsRequest(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }
    console.log("button was clicked"); 
    const response = await fetch("/producers/eggs", requestOptions); 
    console.log(response); 
    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 
}; 