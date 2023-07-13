document.addEventListener('DOMContentLoaded', function() {
        
  document.querySelector('select').onclick = function() {
      document.querySelector('#hello').style.color = this.value;
  }

 });


 const hello = document.getElementById("hello");

// Fetching the driver data
fetch("http://localhost:3000/constructors")
  .then((response) => {
    return response.json();
  })
  .then((driver) 
  
  );
  function driver(data){
    data.map(driver => displayDrivers(driver))
  }