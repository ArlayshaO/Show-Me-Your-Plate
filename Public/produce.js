//document.addEventListener("load", function(event){getProduce()}); 


function getProduce(){
    fetch('/producers/produce').then(function(body){
            let data = body.json(); // Let supposed  the data is in this format [{ id: 1 }, { id: 2 }, { id: 3 }]
            let tr = '';
            let tableBody = document.querySelector('#table_id');
            data.forEach(function(value) {
                let tr = document.createElement('tr');
                tr.textContent = data.id
                tableBody.appendChild(tr);
            });
        //do stuff with data 
      
    }).catch(function(error){
        console.log(error); 
    }); 
}