document.addEventListener("load", function(event){getProduce()}); 

function getProduce(){
    //produceRequest() returns body 
    //also tried fetch('/producers/produce).then
    produceRequest().then(function(body){
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
                div.style.width = "auto";
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
                a.innerHTML = value.link;
                a.style.color = "blue"; 
                a.style.width = "800px";
                a.style.marginLeft ="15px";
                 divBody.appendChild(a)

                let p = document.createElement('p');
                p.innerHTML = value.email;
                p.style.color = "black"; 
                p.style.width = "800px";
                p.style.margin ="15px";
                 divBody.appendChild(p)

                 let p1 = document.createElement('p1'); 
              
                 p1.innerHTML = value.productLocation;
            p1.style.color = "black"; 
               p1.style.width = "800px";
               p1.style.marginLeft ="15px";
                //div.appendChild(tr);
                divBody.appendChild(p1)

                let p2 = document.createElement('p2');
                p2.innerHTML = value.notes;
                p2.style.color = "black"; 
                   p2.style.width = "900px";
                   p2.style.marginLeft ="15px";
                   p2.style.marginBottom ="15px";
              
                    //div.appendChild(tr);
                    divBody.appendChild(p2)
            });
      
    }).catch(function(error){
        console.log(error); 
    }); 
}

async function produceRequest(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }
    console.log("button was clicked"); 
    const response = await fetch("/producers/produce", requestOptions); 
    console.log(response); 
    //traverses the response object and pulls out the body content in the form of JSON 
    const body = await response.json(); 
    if (response.status != 200){
       throw Error(body.message); 
    }

    return body; 
}; 