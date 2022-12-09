var painter = document.getElementById("c").getContext("2d");
var r = [[150, 300, 40, 55],[350, 305, 50, 50]]
var c = [[40, 50, 30, 35],[175, 40, 30, 25],[250, 55, 40, 35],[350, 45, 35, 25]];
var e = [[250, 350-23, 20, 23]]
var rock_dx = -2.5;
var cloud_dx = -1.25;
var dinoX = 30;
var dinoY = 300;
var dinoW = 20;
var dinoH = 50;
var dinoDy = 0;
var g = .2;
var jump = -7;
var timer;
var score = 0;

drawFrame();

document.addEventListener('keydown', onKeyDown);

function init() {
    r = [[150, 300, 40, 55],[350, 305, 50, 50]]
    c = [[40, 50, 30, 35],[175, 40, 30, 25],[250, 55, 40, 35],[350, 45, 35, 25]];
    e = [[250, 350-23, 20, 23]]
    dinoY = 300;
    dinoDy = 0;
    score = 0;
    clearInterval(timer);
    timer = setInterval(drawFrame, 20);
}

function isOver() {
    for (var i = 0; i < r.length; ++i) {
        var rock = r[i];

        
        if (isXyInRect(dinoX, dinoY+dinoH, rock[0], rock[1], rock[2], rock[3]) ||
        isXyInRect(dinoX+dinoW, dinoY+dinoH, rock[0], rock[1], rock[2], rock[3])) {
            return true;
        }
        
    }
    return false;
}

function isXyInRect(x, y, rx, ry, rw, rh) {
    if (x >= rx && x <= rx+rw && y >= ry && y <= ry + rh) {
        return true;
    }
}

function onKeyDown(e) {
    if (e.key === 'Enter') {
        init();
    }
    if (e.key === ' ' && dinoY === 300) {
        dinoDy += jump;
    } else {
        false
    }
}

function updateRocks() {
    for (var i = 0; i < r.length; ++i) {
        var rocks = r[i];
        rocks[0] += rock_dx;
        if (rocks[0] < 0-rocks[2]-13) {
            rocks[0] = 400 + Math.random()*(15);
            rocks[1] = 300 + Math.random()*(15);
            rocks[2] = 35 + Math.random()*(15);
            rocks[3] = 350 - rocks[1] + Math.random()*(10);
        }
    }
}

function updateDino() {
    dinoY += dinoDy;
    dinoDy += g;
    if (dinoY >= 300) {
        dinoY = 300;
        dinoDy = 0;
    }
}

function updateClouds() {
    for (var i = 0; i < c.length; ++i) {
        var cloud = c[i];
        cloud[0] += cloud_dx;
        if (cloud[0] < 0-cloud[2]*2) {
            cloud[0] = 405 + Math.random()*(60-5)+5;
            cloud[1] = 30 + Math.random()*(30);
            cloud[2] = 25 + Math.random()*(25);
            cloud[3] = 20 + Math.random()*(25);
        }
    }
}

function updateEggs() {
    for (var i = 0; i < e.length; ++i) {
        var eggs = e[i];
        eggs[0] += rock_dx;
        for (var j = 0; j < r.length; ++j) {
            var rocks = r[j];
            if (eggs[0] < 0-eggs[2] || eggs[2] < 1) {
                eggs[0] = r[j][0]+100 + Math.random()*(80);
                eggs[2] = 20;
                eggs[3] = 23;
            }
        }
    }
}

function updateScore() {
    for (var i = 0; i < e.length; ++i) {
        var eggs = e[i];
        if (isXyInRect(dinoX, dinoY+dinoH, eggs[0], eggs[1], eggs[2], eggs[3]) ||
        isXyInRect(dinoX+dinoW, dinoY+dinoH, eggs[0], eggs[1], eggs[2], eggs[3])) {
            score ++;
            eggs[2] = 0;
            eggs[3] = 0;
        }
    }
}

function drawFrame() {
    //detect collision
    if (isOver()) {
        gameOver();
        clearInterval(timer);
        return;
    }
    //update
    updateDino();
    updateRocks();
    updateClouds();
    updateEggs();
    updateScore();
    //draw
    drawBackground();
    drawClouds();
    drawEgg();
    drawRocks();
    drawDino();
    drawScore();
}

function drawEgg() {
    //white
    painter.fillStyle = "#FFFFFF"
        for (var i = 0; i < e.length; ++i) {
            painter.fillRect(e[i][0], e[i][1], e[i][2], e[i][3]);
        }
    //purple
    painter.fillStyle = "#C400C4"
        for (var i = 0; i < e.length; ++i) {
            painter.fillRect(e[i][0]+3, e[i][1]+2, e[i][2]/5, e[i][3]/4);
            painter.fillRect(e[i][0]+10, e[i][1]+7, e[i][2]/3, e[i][3]/5);
            painter.fillRect(e[i][0]+6, e[i][1]+14, e[i][2]/5, e[i][3]/3);
        }
}

function drawRocks() {
    painter.fillStyle = "#555555";
        for (var i = 0; i < r.length; ++i) {
            //x, y, w, h
            painter.fillRect(r[i][0], r[i][1], r[i][2], r[i][3]);
            painter.fillRect(r[i][0]+r[i][2], r[i][1] + 8, 13, r[i][3] - 8)
        }
}

function drawDino() {
    //green
    painter.fillStyle="#227722"
    //body
    painter.fillRect(dinoX, dinoY, dinoW, dinoH)
    painter.fillRect(dinoX+dinoW, dinoY+(dinoH/3), dinoW/2, dinoH/5)
    painter.fillRect(dinoX-20, dinoY+30, dinoW, dinoH/6)
    //head
    painter.fillRect(dinoX, dinoY-20, dinoW+20, dinoH-30)
    painter.fillRect(dinoX, dinoY-24, dinoW, dinoH-45)
    painter.fillRect(dinoX+25, dinoY-23, dinoW-8, dinoH-45)

    //darkgreen
    painter.fillStyle="#005500"
    //stripes
    for (i = 0; i < 6; ++i) {
        painter.fillRect(dinoX, dinoY+(5*i), dinoW/2, dinoH/20)
    }
    //white
    painter.fillStyle="#FFFFFF"
    //eye
    painter.fillRect(dinoX+10, dinoY-20, dinoW-10, dinoH-40);
    //mouth
    painter.fillRect(dinoX+dinoW+10, dinoY-12, dinoW/2, dinoH/6);

    //black
    painter.fillStyle="#000000"
    //pupil
    painter.fillRect(dinoX+15, dinoY-18, dinoW-15, dinoH-45);
}

function drawClouds() {
    painter.fillStyle ="#CCCCCC"
        for(var i = 0; i < c.length; ++i) {
            painter.fillRect(c[i][0], c[i][1], c[i][2], c[i][3]);
            painter.fillRect(c[i][0]+c[i][2], c[i][1]+c[i][3]/3, c[i][2]/2, c[i][3]/1.5);
            painter.fillRect(c[i][0]-c[i][2]/2, c[i][1]+c[i][3]/2, c[i][2]/2, c[i][3]/2);
        }
}

function drawBackground() {
    //sky
    painter.fillStyle="#3355FF"
    painter.fillRect(0, 0, 400, 350)
    //sun
    painter.fillStyle="#FFFF00"
    painter.fillRect(300, 50, 50, 50)
    //grass
    painter.fillStyle="#33FF44"
    painter.fillRect(0, 350, 400, 10)
    //dirt
    painter.fillStyle="#553333"
    painter.fillRect(0, 360, 400, 40)
}

function gameOver() {
    painter.font = "30px Arial";
    painter.fillStyle = "#000000"
    painter.textBaseline = "top";
    painter.textAlign = "center";
    painter.fillText("GAME OVER!", 200, 200);
}

function drawScore() {
    painter.font = "20px Arial";
    painter.fillStyle = "#FFFFFF"
    painter.textBaseline = "top";
    painter.textAlign = "left";
    painter.fillText("Score: " + score, 10, 10);
}