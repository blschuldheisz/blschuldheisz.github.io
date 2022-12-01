var sky = document.getElementById("sky").getContext("2d");
var p = [[125, 195, 50, 100],[225, 150, 50, 100],[325, 125, 50, 100], [440, 135, 50, 100]]; // [x, y, w, h] of the passage
var c = [[40, 50, 30, 35],[175, 40, 30, 25],[250, 55, 40, 35], [350, 45, 35, 25]];
var cactus = [[65, 285, 8, 20],[100, 280, 9, 23],[175, 275, 10, 26],[235, 287, 7, 18],[300, 280, 9, 23]];
var pipe_dx = -1.75;
var cloud_dx = -1;
var cacti_dx = -.4;
var birdY = 150;
var birdX = 50;
var g = 0.13;
var birdDy = 0;
var birdSize = 20;
var beakSize = 5;
var jump = -4;
var timer;
var score = 0;

drawFrame();

document.addEventListener('keydown', onKeyDown);

function init() {
    p = [[125, 195, 50, 100],[225, 150, 50, 100],[325, 125, 50, 100],[440, 135, 50, 100]]; // [x, y, w, h] of the passage
    c = [[40, 50, 30, 35],[175, 40, 30, 25],[250, 55, 40, 35],[350, 45, 35, 25]];
    cactus = [[65, 285, 8, 20],[100, 280, 9, 23],[175, 275, 10, 26],[235, 287, 7, 18],[300, 280, 9, 23]];
    birdY = 150;
    birdDy = 0;
    score = 0;
    clearInterval(timer);
    timer = setInterval(drawFrame, 20);
}

function onKeyDown(e) {
    if (e.key === 'Enter') {
        init();
    } else if (e.key === ' ') {
        birdDy += jump;
    }
}

function updatePipes() {
    for (var i = 0; i < p.length; ++i) {
        var pipe = p[i];
        pipe[0] += pipe_dx;
        if (pipe[0] < 0-pipe[2]){
            pipe[0] = 400 + Math.random()*(20-10) +10;
            pipe[1] = 100 + Math.random()*(125-10) +10;
            score ++;
        }
    }
}

function updateClouds() {
    for (var i = 0; i < c.length; ++i) {
        var cloud = c[i];
        cloud[0] += cloud_dx;
        if (cloud[0] < 0-cloud[2]) {
            cloud[0] = 400 + Math.random()*(60-5)+5;
            cloud[1] = 30 + Math.random()*(30);
            cloud[2] = 25 + Math.random()*(25);
            cloud[3] = 20 + Math.random()*(25);
        }
    }
}

function updateCacti() {
    for (var i = 0; i < cactus.length; ++i) {
        var cacti = cactus[i];
        cacti[0] += cloud_dx;
        if (cacti[0] < 0-cacti[2]) {
            cacti[0] = 400 + Math.random()*(60-5)+5;
            cacti[1] = 285 + Math.random()*(5);
            cacti[2] = 6 + Math.random()*(4);
            cacti[3] = 15 + Math.random()*(20);
        }
    }
}

function updateBird() {
    birdY += birdDy;
    birdDy += g;
}

function isOver() {
    for (var i = 0; i < p.length; ++i) { //x, y, rx, ry, rw, rh [x, y, w, h]
        var pipe = p[i];
        
        //top pipes
        if (isXyInRect(birdX, birdY, pipe[0], 0, pipe[2], pipe[1]) || 
isXyInRect(birdX+birdSize, birdY, pipe[0], 0, pipe[2], pipe[1])){
            return true;
        }
        //bottom pipes
        if (isXyInRect(birdX, birdY+birdSize, pipe[0], pipe[1]+pipe[3], pipe[2], 400-pipe[1]-pipe[2]) || 
isXyInRect(birdX+birdSize, birdY+birdSize, pipe[0], pipe[1]+pipe[3], pipe[2], 400-pipe[1]-pipe[2])){
            return true;
        }
    }
    if (birdY <= 0 || birdY >= 400-birdSize) {
        return true;
    }

    return false;
}

function isXyInRect(x, y, rx, ry, rw, rh) {
    if (x >= rx && x <= rx+rw && y >= ry && y <= ry + rh) {
        return true;
    }
}

function drawFrame() {
    //detect collision
    if (isOver()) {
        gameOver();
        clearInterval(timer);
        return;
    };
    //update
    updateCacti();
    updatePipes();
    updateBird();
    updateClouds();
    //draw
    drawBackground();
    drawClouds();
    drawCacti();
    drawPipes();
    drawScore();
    drawBird();
}

function drawBird () {
    sky.fillStyle = "#FF0000";
    sky.fillRect(birdX, birdY, birdSize, birdSize);

    sky.fillStyle = "#FFFFFF"
    sky.fillRect(birdX+10, birdY+3, beakSize, beakSize+2)

    sky.fillStyle = "#000000";
    sky.fillRect(birdX+18, birdY+10, beakSize+2, beakSize)
    sky.fillRect(birdX+12, birdY+5, beakSize-2, beakSize)
}

function drawPipes() {
    sky.fillStyle = "#00FF00"
        for (var i = 0; i < p.length; ++i) {
            sky.fillRect(p[i][0], 0, p[i][2], p[i][1]);
            sky.fillRect(p[i][0], p[i][1]+p[i][3], p[i][2], 400-p[i][1]-p[i][3]);
    }
}

function drawClouds() {
    sky.fillStyle ="#CCCCCC"
        for(var i = 0; i < c.length; ++i) {
            sky.fillRect(c[i][0], c[i][1], c[i][2], c[i][3])
        }
}

function drawCacti() {
    sky.fillStyle ="#005500";
        for(var i = 0; i < cactus.length; ++i) {
            sky.fillRect(cactus[i][0], cactus[i][1], cactus[i][2], cactus[i][3])
    }
}

function drawBackground() {
    //sky
    sky.fillStyle="#4444FF";
    sky.fillRect(0, 0, 400, 300)
    //separater
    sky.fillStyle="#FFFFAA";
    sky.fillRect(0, 300, 400, 10)
    //ground
    sky.fillStyle="#FFFF55";
    sky.fillRect(0, 310, 400, 90)
    //sun
    sky.fillStyle="#FFFF00";
    sky.fillRect(300, 50, 40, 40);
}

function gameOver() {
    sky.font = "30px Arial";
    sky.fillStyle = "#000000"
    sky.textBaseline = "top";
    sky.textAlign = "center";
    sky.fillText("GAME OVER!", 200, 200);
}

function drawScore() {
    sky.font = "20px Arial";
    sky.fillStyle = "#FFFFFF"
    sky.textBaseline = "top";
    sky.textAlign = "left";
    sky.fillText("Score: " + score, 10, 10);
}