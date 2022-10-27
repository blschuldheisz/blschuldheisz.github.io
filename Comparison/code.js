document.getElementById("id1").innerHTML="Comparison Input!";

var btn = document.getElementById('btn');
btn.addEventListener('click', Max);

function Max(a, b, c, m) {
    
    var a = Number(document.getElementById('input1').value);
    var b = Number(document.getElementById('input2').value);
    var c = Number(document.getElementById('input3').value);
     var m;
     m = a > b ? a : b;
     m = m > c ? m : c;
     
    document.getElementById("output").innerHTML = m;
}