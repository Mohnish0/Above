var colors = ["red", "blue", "green", "white"];
var colorIndex = 0;
var colorIndex1 = 0;
var colorIndex2 = 0;
var colorIndex3 = 0;
var colorIndex4 = 0;
var colorIndex5 = 0;
var colorIndex6 = 0;
var colorIndex7 = 0;
var colorIndex8 = 0;
var colorIndex9 = 0;

function changeColor1() {
    var col = document.getElementById("body");
    if (colorIndex % 2 == 0) {

        col.style.backgroundColor = colors[0];
        document.getElementById("button1").innerHTML = "Turn Light off";
        colorIndex++;
        
    }

    else if (colorIndex % 2 != 0) {
        col.style.backgroundColor = colors[3];
        colorIndex++;
        document.getElementById("button1").innerHTML = "Turn Light back to red";
    }

}

function changeColor2() {
    var col = document.getElementById("body");
    if (colorIndex1 % 2 == 0) {

        col.style.backgroundColor = colors[1];
        colorIndex1++;

        document.getElementById("button2").innerHTML = "Turn Light off";
    }

    else if (colorIndex1 % 2 != 0) {
        col.style.backgroundColor = colors[3];
        colorIndex1++;
        document.getElementById("button2").innerHTML = "Turn Light back to blue";
    }

}
function changeColor3() {
    var col = document.getElementById("body");
    if (colorIndex2 % 2 == 0) {

        col.style.backgroundColor = colors[2];
        colorIndex2++;
        document.getElementById("button3").innerHTML = "Turn Light off";
    }

    else if (colorIndex2 % 2 != 0) {
        col.style.backgroundColor = colors[3];
        colorIndex2++;
        document.getElementById("button3").innerHTML = "Turn Light back to Green";
    }
}


function changeColor4() {
    var col = document.getElementById("body2");
    if (colorIndex4 % 2 == 0) {

        col.style.backgroundColor = colors[0];
        document.getElementById("button4").innerHTML = "Turn Light off";
        colorIndex4++;
        
    }

    else if (colorIndex4 % 2 != 0) {
        col.style.backgroundColor = colors[3];
        colorIndex4++;
        document.getElementById("button4").innerHTML = "Turn Light back to red";
    }

}

function changeColor5() {
    var col = document.getElementById("body2");
    if (colorIndex5 % 2 == 0) {

        col.style.backgroundColor = colors[1];
        colorIndex5++;

        document.getElementById("button5").innerHTML = "Turn Light off";
    }

    else if (colorIndex5 % 2 != 0) {
        col.style.backgroundColor = colors[3];
        colorIndex5++;
        document.getElementById("button5").innerHTML = "Turn Light back to blue";
    }

}
function changeColor6() {
    var col = document.getElementById("body2");
    if (colorIndex6 % 2 == 0) {

        col.style.backgroundColor = colors[2];
        colorIndex6++;
        document.getElementById("button6").innerHTML = "Turn Light off";
    }

    else if (colorIndex6 % 2 != 0) {
        col.style.backgroundColor = colors[3];
        colorIndex6++;
        document.getElementById("button6").innerHTML = "Turn Light back to Green";
    }
}


function changeColor7() {
    var col = document.getElementById("body3");
    if (colorIndex7 % 2 == 0) {

        col.style.backgroundColor = colors[0];
        document.getElementById("button7").innerHTML = "Turn Light off";
        colorIndex7++;
        
    }

    else if (colorIndex7 % 2 != 0) {
        col.style.backgroundColor = colors[3];
        colorIndex7++;
        document.getElementById("button7").innerHTML = "Turn Light back to red";
    }

}

function changeColor8() {
    var col = document.getElementById("body3");
    if (colorIndex8 % 2 == 0) {

        col.style.backgroundColor = colors[1];
        colorIndex8++;

        document.getElementById("button8").innerHTML = "Turn Light off";
    }

    else if (colorIndex8 % 2 != 0) {
        col.style.backgroundColor = colors[3];
        colorIndex8++;
        document.getElementById("button8").innerHTML = "Turn Light back to blue";
    }

}
function changeColor9() {
    var col = document.getElementById("body3");
    if (colorIndex9 % 2 == 0) {

        col.style.backgroundColor = colors[2];
        colorIndex9++;
        document.getElementById("button9").innerHTML = "Turn Light off";
    }

    else if (colorIndex9 % 2 != 0) {
        col.style.backgroundColor = colors[3];
        colorIndex9++;
        document.getElementById("button9").innerHTML = "Turn Light back to Green";
    }
}