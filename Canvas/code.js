var painter1 = document.getElementById("c").getContext("2d");
var painter2 = document.getElementById("c1").getContext("2d");


painter1.fillStyle = "#000000";
painter1.fillRect(0, 0, 400, 400); //x, y, w, h

painter1.fillStyle = "#FF0000";
    for(var d = 0; d < 7; d++) {
        for(var c = 0; c < 8; c++){
            painter1.fillRect(10 + (51.5*c), 10 + (60*d), 20, 20)
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

x = 0;
while (x < 13) {
    y = 0
    while (y < 7) {
        if (x<6&&x+y<7) {
            painter2.fillRect((10 + (30*y)) + (30*x), 370 - (30*y), 20, 20); 
        } else {
            if (x>5&&y<4) {
                painter2.fillRect((10 - (30*y)) + (30*x), 370 - (30*y), 20, 20);
            } else {
                if (x>10&&y<6) {
                    painter2.fillRect((10 - (30*y)) + (30*x), 370 - (30*y), 20, 20);
                } else {
                    break;
                }
            }
        }
        y++;
    }
    x++;
}
