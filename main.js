window.addEventListener("load", Bounds);

var achieve = 0;
var Width;
var Height;
var timer;
var iterations = 0;
var mySound;

function detectHit() {
    achieve++;
    document.getElementById("achieveLabel").innerHTML = "Achieve: " + achieve;
}

function moveDot() {
    var x = Math.floor(Math.random() * Width);
    var y = Math.floor(Math.random() * Height);
    if (x < 28) x = 10;
    if (y < 10) y = 8;
    document.getElementById("myDiv").style.left = x + "px";
    document.getElementById("myDiv").style.top = y + "px";
    if (iterations < 160) timer = setTimeout("moveDot()", 500);
    else {
        document.getElementById("achieveLabel").innerHTML += " STAPT GAME";
        document
            .getElementById("myDiv")
            .removeEventListener("click", detectHit);
        clearTimeout(timer);
    }
    iterations++;
}
var mySound;

// NOTE  A POP-UP
alert("let's go to play game");
alert("And enjoy in music");

function Bounds() {
    Width = innerWidth;
    Height = innerHeight;
    Width -= 22;
    Height -= 97;
    document.getElementById("game1").style.width = Width + "px";
    document.getElementById("game1").style.height = Height + "px";
    document.getElementById("myDiv").addEventListener("click", detectHit);
    Width -= 164;
    Height -= 164;
    moveDot();
}
