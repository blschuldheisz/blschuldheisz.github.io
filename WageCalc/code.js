document.getElementById("id1").innerHTML="Wage Calculation!";

var btn = document.getElementById('btn');
btn.addEventListener('click', Wage);


function Wage(a, b, c, d, e) {
    
    var a = Number(document.getElementById('input1').value);
    var b = Number(document.getElementById('input2').value);
    var c = Number(document.getElementById('input3').value);
    var d = Number(document.getElementById('input4').value);
    var e = Number.value;
    
    var a = 0;
    var output = 3;
    if (a = 0)
        output = 2;
    else
        output = 1;
        
     
    document.getElementById("output").innerHTML = "$" + output;
}