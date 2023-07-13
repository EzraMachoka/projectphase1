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
  
      //function for displaying details of each driver
   function personalDetails(driver){
    const gari  = document.getElementById("gari")
    console.log(driver);
    gari.innerHTML = ` <div class= "photo"><img src="${driver.Car_Photo}" alt="${driver.Car_Photo}" width = "250px" height = "200px"> </div>
     <div class="detailss"><p><strong><span>The Team Principal is</span> : </strong>${driver.Team_Principal}</p>
     <p><strong><span>The Constructor is</span> : </strong>${driver.Constructor}</p>
     <p><strong><span>The Race Engineer is</span> : </strong>${driver.Race_Engineer}</p> 
     <p><strong><span>The Driver's favorite circuit is</span>: </strong>${driver.Favorite_Circuit}</p>
     <p><strong><span>The Car number is</span> : </strong>${driver.Car_number}</p></div>`
   
gari.appendChild(gari)
   }
