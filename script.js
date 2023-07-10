document.addEventListener('DOMContentLoaded', function() {
        
    document.querySelector('select').onclick = function() {
        document.querySelector('#hello').style.color = this.value;
    }

   });



   document.addEventListener('DOMContentLoaded', function(){

    document.querySelectorAll('select').forEach(function(dropdown){
        dropdown.onclick = function(){
            document.querySelector('#hello')
                
            
        }

    })
   })
   
