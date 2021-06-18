function compute(){
    p = document.getElementById("principal").value;
    r =  document.getElementById("rate").value;
    y = document.getElementById("years").value;
    yrs = new Date().getFullYear()+Number(y)
    var interest =r*y*p/100;

    if(p < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else

    document.getElementById("output1").innerHTML = "If you deposit "+ "<mark>"+p+"</mark>"  + ",";
    document.getElementById("output2").innerHTML = "at an interest rate of "+"<mark>"+r+"</mark>"+"%.";
    document.getElementById("output3").innerHTML = "You will receive an amount of " +"<mark>"+interest+"</mark>"+","
    document.getElementById("output4").innerHTML = "in the year "+ "<mark>"+yrs+"</mark>"
}

function updateRateValue(val) {
          document.getElementById('rateValue').value=val; 
        }

function updateRate(val) {
          document.getElementById('rate').value=val; 
        }




