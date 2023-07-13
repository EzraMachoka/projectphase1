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
     <div class="detailss"><p><strong>The Team Principal is : </strong>${driver.Team_Principal}</p>
     <p><strong>The Constructor is : </strong>${driver.Constructor}</p>
     <p><strong>The Race Engineer is : </strong>${driver.Race_Engineer}</p> 
     <p><strong>The Driver's favorite circuit is: </strong>${driver.Favorite_Circuit}</p>
     <p><strong>The Car number is : </strong>${driver.Car_number}</p></div>`
   
gari.appendChild(gari)
   }
