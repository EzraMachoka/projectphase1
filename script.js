document.addEventListener('DOMContentLoaded', function() {
        
    document.querySelector('select').onclick = function() {
        document.querySelector('#hello').style.color = this.value;
    }

   });
