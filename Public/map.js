

 function initMap() {
  let map;
   map = new google.maps.Map(document.getElementById("map"), {
     center: { lat: 39.099724, lng: -94.578331 },
     zoom: 10,
     
     mapID: '1d670811fb0d41cc'
   });
  }
   
  /*
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
}; */