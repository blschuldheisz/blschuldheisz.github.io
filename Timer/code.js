var painter = document.getElementById("c").getContext("2d");
var button = document.getElementById("b");

button.addEventListener('click', onClick);

var x = 190;
var y = 0;

var g = .5;
var dy = 10;
var dx = 4;
var jump = -12;

var isLeft = false;
var isRight = false;
var isUp = false;
var allowJump = false;

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

drawBackground();
drawSquare(190, 0);
drawPlatform();

function onKeyUp(e) {
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        isLeft = false;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
        isRight = false;
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        isUp = false; 
    } 
}

function onKeyDown(e) {
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        isLeft = true;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
        isRight = true;
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        isUp = true; 
    } 
}

function onClick() {
    setInterval(onTick, 20);
    y = 380;
}

function onTick() {
    y += dy;
    dy += g;

    if (isLeft) {
        x -= dx;
    }
    if (isRight) {
        x += dx;
    }
    if (isUp && allowJump) {
        dy += jump;
        allowJump = false;
    }
    if (dy >= 0) {
        allowJump = true;
    }
    if (y > 380) {
        y = 380
        dy = 0;
    }
    if (x>=400) {
        x = 0;
    }
    if (x <= -20) {
        x = 380;
    }
    if (y>=300 && y<= 310 && x>281){
        y = 310;
    }
    if (x<0 && y>=300 && y<= 310) {
        y = 310;
    }
    if (x<0 && y>=280 && y<= 300) {
        y = 280;
    }
    if (y>=280 && y<= 300 && x>281){
        y = 280;
    }

    drawBackground();
    drawSquare(x, y);
    drawPlatform();
}

function drawSquare(x, y) {
    painter.fillStyle="#FF0000"
    if (x <= 0) {
        painter.fillRect(0, y, 20+x, 20);
        painter.fillRect(400+x, y, -x, 20);
    }
    if (x > 380) {
        painter.fillRect(x, y, 400-x, 20);
        painter.fillRect(0, y, 20+x-400, 20);
    }
    painter.fillRect(x, y, 20, 20)
}

function drawBackground() {
    painter.fillStyle="#AAAAAA";
    painter.fillRect(0, 0, 400, 400)
}

function drawPlatform() {
    painter.fillStyle="#000000"
    painter.fillRect(300, 300, 100, 10)
}
