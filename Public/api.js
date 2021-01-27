
loadMapsScript(); 

async function loadMapsScript(){ 
  //create a script element on the page
  var script = document.createElement('script');
  
  //call our API to get our API Key 
  let response = await fetch('/api/tpk/maps', { method: "GET", headers: { "Content-Type": "application/json"}
  }); 
  
  //combine our API KEY with googles string to set the source attribute of the script tag correctly
  script.src = "https://maps.googleapis.com/maps/api/js?key=" + response.body + "&callback=initMap&libraries=&v=weekly";

  document.head.appendChild(script);
}