document.addEventListener("load", function(event){getMarkets()}); 

function getMarkets(){
    //produceRequest() returns body 
    //also tried fetch('/producers/produce).then
    marketsRequest().then(function(body){
        console.log(body); 
        let div = '';
        let divBody = document.querySelector('#results');
        body.forEach(function(value) {
            //map code 
            new google.maps.Marker({
                position: {  lat: value.latitude, lng: value.longitude},
                map,
                title: value.name
            })

            //list code 
            //let div = document.createElement('div');
            let div = document.createElement ('div')
           
            div.style.borderStyle ="inset";
            div.style.borderColor ="black";
            div.style.borderTopColor ="white";
          
            div.style.borderWidth ="3px";
        
           // div.style="nth-child(even) background-color: #000000;"
         
            divBody.append(div);

            let h2 = document.createElement('h2');
            h2.style.color = "Green"; 
            h2.innerHTML = value.name;
            h2.style.marginLeft ="15px";
            divBody.appendChild(h2);

            let a = document.createElement('a');
            a.style.color = "blue"; 
            a.innerHTML = value.link;
            a.style.width = "800px";
            a.style.marginLeft ="15px";
             divBody.appendChild(a)

             let address = document.createElement('address'); 
             address.style.color = "black"; 
             address.innerHTML = value.productLocation;
             address.style.width = "800px";
             address.style.marginLeft ="15px";
            //div.appendChild(tr);
            divBody.appendChild(address)

            let notes = document.createElement('notes');
            notes.innerHTML = value.notes;
            notes.style.color = "black"; 
            notes.style.width = "800px";
            notes.style.marginLeft ="15px";
            notes.style.marginBottom ="15px";
                //div.appendChild(tr);
                divBody.appendChild(notes)
            });
      
    }).catch(function(error){
        console.log(error); 
    }); 
}

async function marketRequest(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }
    console.log("button was clicked"); 
    const response = await fetch("/producers/markets", requestOptions); 
    console.log(response); 
    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 
}; 