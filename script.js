var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var fontSize =  window.innerHeight/20;
var cordX = canvas.width/1000;
var cordY = canvas.height/1000;


var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";

function drawStatic(){

}

function drawDynamic(){
    
}

function drawFrame(){
    drawStatic();
    drawDynamic();

}

function launcher(){

}