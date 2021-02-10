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
                div.style.border ="groove";
                div.style.backgroundColor = "white";
              
               // div.style="nth-child(even) background-color: #000000;"
             
                divBody.append(div);

                let h2 = document.createElement('h2');
                h2.style.color = "Green"; 
                h2.innerHTML = value.name;
                divBody.appendChild(h2);

                let a = document.createElement('a');
                a.innerHTML = value.link;
                a.style.color = "blue"; 
                a.style.width = "800px";
                 divBody.appendChild(a)

                let p = document.createElement('p');
                p.innerHTML = value.email;
                p.style.color = "black"; 
                p.style.width = "800px";
                 divBody.appendChild(p)
              
                 p.innerHTML = value.productLocation;
            p.style.color = "black"; 
               p.style.width = "800px";
                //div.appendChild(tr);
                divBody.appendChild(p)

                let p1 = document.createElement('p1');
                p1.innerHTML = value.notes;
                p1.style.color = "black"; 
                   p1.style.width = "800px";
                    //div.appendChild(tr);
                    divBody.appendChild(p1)
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