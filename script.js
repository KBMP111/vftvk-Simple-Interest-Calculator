function compute(){
    p = document.getElementById("principal").value;
    r =  document.getElementById("rate").value;
    y = document.getElementById("years").value;
    var interest =r*y*p/100
    document.getElementById("output").innerHTML = interest
  
}

function updateRateValue(val) {
          document.getElementById('rateValue').value=val; 
        }

function updateRate(val) {
          document.getElementById('rate').value=val; 
        }




