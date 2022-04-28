var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var fontSize =  window.innerHeight/20;
var cordX = canvas.width/1000;
var cordY = canvas.height/1000;


var ctx = canvas.getContext("2d");
ctx.fillStyle = "white";

function lineDraw(arg){
    ctx.strokeStyle = arg[4];
    ctx.moveTo(arg[0]*cordX, arg[1]*cordY);
    ctx.lineTo(arg[2]*cordX, arg[3]*cordY);
}

function textDraw(arg){
    ctx.textAlign = "center";
    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 10, 50);
}


function drawStatic(){
    //left top line
    lineDraw([200,0,200,100,"white"]);
    textDraw(["center","red",""]);    
}

function drawDynamic(){
    
}

function drawFrame(){
    drawStatic();
    drawDynamic();

}

function launcher(){
    drawFrame();
    ctx.stroke();
}

launcher();