var painter = document.getElementById("c").getContext("2d");

painter.fillStyle= "#D3D3D3"
painter.fillRect(0, 0, 1000, 1000);

painter.fillStyle = "#555555";
    for(var a = 0; a < 25; a++) {
        for(var b = 0; b < 25; b++)
        painter.fillRect(0 + 40*a, 0 + 40*b, 20, 20);
    }

    for(var c = 0; c < 25; c++) {
        for(var d = 0; d < 25; d++) {
            painter.fillRect(20 + 40*c, 20 + 40*d, 20, 20);
        }
    }

painter.fillStyle = "#000000";
    for(var a = 0; a < 25; a++) {
        for(var b = 0; b < 25; b++) {
            if (a>8 && a<16 && b>8) {
                break;
            } else {
                painter.fillRect(15 + 40*a, 15 + 40*b, 10, 10);
            }
        }
    }

    for(var c = 0; c < 24; c++) {
        for(var d = 0; d < 24; d++) {
            if (c>8 && c<16 && d>8) {
                break;
            } else {
                painter.fillRect(35 + 40*c, 35 + 40*d, 10, 10);
            }
        }
    }

painter.fillStyle = "#FFFFFF";
    for(var a = 0; a < 25; a++) {
        for(var b = 0; b < 24; b++) {
            if (a>8 && a<16 && b>8) {
                break;
            } else {
                painter.fillRect(15 + 40*a, 35 + 40*b, 10, 10);
            }
        }
    }

    for(var c = 0; c < 24; c++) {
        for(var d = 0; d < 25; d++) {
            if (c>8 && c<16 && d>8) {
                break;
            } else {
                painter.fillRect(35 + 40*c, 15 + 40*d, 10, 10);
            }
        }
    }

painter.fillStyle = "#000000";
    for(var a = 0; a < 7; a++) {
        for(var b = 0; b < 7; b++) {
            painter.fillRect(375 + 40*a, 395 + 40*b, 10, 10);
        }
    }

    for(var c = 0; c < 7; c++) {
        for(var d = 0; d < 7; d++) {
            painter.fillRect(395 + 40*c, 395 + 40*d, 10, 10);
        }
    }

painter.fillStyle = "#FFFFFF"; 
    for(var a = 0; a < 7; a++) {
        for(var b = 0; b < 7; b++) {
            painter.fillRect(375 + 40*a, 375 + 40*b, 10, 10);
        }
    }

    for(var c = 0; c < 7; c++) {
        for(var d = 0; d < 7; d++) {
            painter.fillRect(395 + 40*c, 395 + 40*d, 10, 10);
        }
    }

painter.fillStyle = "#000000";
    for(var a = 0; a < 7; a++) {
        for(var b = 0; b < 7; b++) {
            painter.fillRect(395 + 40*a, 375 + 40*b, 10, 10);
        }
    }
painter.fillStyle = "#FFFFFF"; 
    for(var a = 0; a < 7; a++) {
        for(var b = 0; b < 9; b++) {
            painter.fillRect(395 + 40*a, 655 + 40*b, 10, 10);
        }
    }

    for(var c = 0; c < 7; c++) {
        for(var d = 0; d < 8; d++) {
            painter.fillRect(375 + 40*c, 675 + 40*d, 10, 10);
        }
    }

painter.fillStyle = "#000000";
    for(var a = 0; a < 7; a++) {
        for(var b = 0; b < 9; b++) {
            painter.fillRect(375 + 40*a, 655 + 40*b, 10, 10);
        }
    }

    for(var c = 0; c < 7; c++) {
        for(var d = 0; d < 8; d++) {
            painter.fillRect(395 + 40*c, 675 + 40*d, 10, 10);
        }
    }