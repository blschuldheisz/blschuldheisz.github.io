var painter = document.getElementById("c").getContext("2d");
drawBackground();
var big = 20;

for (var a = 0; a < 1000/big; ++a) {
    for (var b = 0; b < 1000/big; ++b) {
        var x = 0 + a*big;
        var y = 0 + b*big;
        if (a%2 == 0 && b%2 == 0 || a%2 == 1 && b%2 == 1) {
            var color = "#D3D3D3"
        } else {
            var color = "#555555"
        }
        drawSquare(color, x, y);
    }
}

for (var a = 0; a < 1000/(big+.5); ++a) {
    for (var b = 0; b < 1000/(big+.5); ++b) {
        var x = 15 + a*big;
        var y = 15 + b*big;
        if (a%2 == 0 && b%2 == 0 || a%2 == 1 && b%2 == 1) {
            var color = "#FFFFFF"
        } else {
            var color = "#000000"
        }
        if (a > 1/4 * 1000/big & a < 3/4 * 1000/big && 
            b > 1/4 * 1000/big & b< 3/4 * 1000/big) {
            if (color === "#FFFFFF"){
                color = "#000000"
            } else {
                color = "#FFFFFF"
            }
        }
        drawTinySquare(color, x, y);
    }
}


function drawBackground() {
    painter.fillStyle = "#000000"
    painter.fillRect(0, 0, 1000, 1000);
}
function drawSquare(color, x, y) {
    painter.fillStyle = color;
    painter.fillRect(x, y, 20, 20)
}
function drawTinySquare(color, x, y) {
    painter.fillStyle = color;
    painter.fillRect(x, y, 10, 10)
}