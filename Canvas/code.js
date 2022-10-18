var painter1 = document.getElementById("c").getContext("2d");
var painter2 = document.getElementById("c1").getContext("2d");


painter1.fillStyle = "#000000";
painter1.fillRect(0, 0, 400, 400); //x, y, w, h

painter1.fillStyle = "#FF0000";

    for(var j = 0; j < 7; j++) {
        for(var i = 0; i < 8; i++){
            painter1.fillRect(10 + (51.5*i), 10 + (60*j), 20, 20)
        }
    }
    
    for(var a = 0; a < 6; a++) {
        for(var b = 0; b < 7; b++){
            painter1.fillRect(35 + (51.5*b), 40 + (60*a), 20, 20)
        }
    }


painter2.fillStyle = "#000000";
painter2.fillRect(0, 0, 400, 400); //x, y, w, h

painter2.fillStyle = "#00FF00";

for(x = 0; x < 13; x++){
    for(y = 0; y < 7; y++){
        painter2.fillRect((10 + (30*y)) + (30*x), 370 - (30*y), 20, 20);
    
    }
}

painter2.fillStyle = "#000000";

for(x = 0; x < 13; x++){
    for(y = 0; y < 6; y++){
        painter2.fillRect(370 - (30*y), (340 - (30*y)) - (30*x), 20, 20);
    
    }
}