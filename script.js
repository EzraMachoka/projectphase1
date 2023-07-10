document.addEventListener('DOMContentLoaded', function() {
        
    document.querySelector('select').onclick = function() {
        document.querySelector('#hello').style.color = this.value;
    }

   });



//    document.addEventListener('DOMContentLoaded', function(){

//     document.querySelectorAll('select').forEach(function(dropdown){
//         dropdown.onclick = function(){
//             document.querySelector('#hello').console.log = Constructor
                
            
//         }

//     })
//    })
   

const driver = document.getElementById("hello");

// Displays the driver and his details
fetch("http://localhost:3000/constructors")
  .then((response) => {
    return response.json();
  })
  .then((driver) => {
    
    let Driver1 = document.createElement("div");
    Driver1.innerHTML = `<h1>${driver.Driver}</h1> 
    <img src="${driver.Car_Photo}" alt="${driver.Car_Photo}" width = "250px" height = "200px"> 
    <p><strong>The Team Principal is : </strong>${driver.Team_Principal}</p>
    <p><strong>The Constructor is : </strong>${driver.Constructor}</p>
    <p><strong>The Race Engineer is : </strong>${driver.Race_Engineer}</p> 
    <p><strong>The Driver's favorite circuit is: </strong>${driver.Favorite-Circuit}</p>
    <p><strong>The Car number is : </strong>${driver.Car_number}</p>`
     hello.appendChild(driver)

  });

  
