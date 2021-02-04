
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
script.src = "https://maps.googleapis.com/maps/api/js?key=" + body.data + "&map_ids=1d670811fb0d41cc&callback=initMap&libraries=&v=weekly";
script.defer = true;
script.onload = initMap;
script.async = true;
  document.head.appendChild(script);
}
let map;
function initMap() {
     map = new google.maps.Map(document.getElementById("map"), {
       center: { lat: 39.099724, lng: -94.578331 },
       zoom: 10,
       mapID: '1d670811fb0d41cc'
     });
    }
 /*
    // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
  }
};

*/