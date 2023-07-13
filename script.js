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

    //list of of all drivers

    function displayDrivers(driver){

       
      let driverlist= document.querySelector("#driverlist")
      let Driver1 = document.createElement("li");
      Driver1.addEventListener("click",() =>(personalDetails(driver)));
      Driver1.textContent = driver.Driver
       driverlist.appendChild(Driver1)
     }
  