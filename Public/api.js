
loadMapsScript(); 

async function loadMapsScript(){ 
  //create a script element on the page
  var script = document.createElement('script');
  
  //call our API to get our API Key 
  let response = await fetch('/api/tpk/maps', { method: "GET", headers: { "Content-Type": "application/json"}
  }); 
  let body = await response.json()
  console.log (body)
  //combine our API KEY with googles string to set the source attribute of the script tag correctly//added map id to string before callback
script.src = "https://maps.googleapis.com/maps/api/js?key=" + body.data + "1d670811fb0d41cc&callback=initMap&libraries=&v=weekly";
script.defer = true;
script.onload = initMap;
script.async = true;
  document.head.appendChild(script);
}
let map;
function initMap() {
     map = new google.maps.Map(document.getElementById("map"), {
       center: { lat: 39.099724, lng: -94.578331 },
       zoom: 11,
       mapTypeId: 'hybrid'
     });
    }
     