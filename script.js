var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//cords
var cordX = canvas.width/1000;
var cordY = canvas.height/1000;
//font size
var fontSize =  cordY*33*cordX/cordY;
if (fontSize>cordY*33){
    fontSize = cordY*33;
}
//delta
//var delta=



var ctx = canvas.getContext("2d");
ctx.fillStyle = "white";

function lineDraw(arg){
    ctx.strokeStyle = arg[4];
    ctx.moveTo(arg[0]*cordX, arg[1]*cordY);
    ctx.lineTo(arg[2]*cordX, arg[3]*cordY);
}

function textDraw(arg){
    ctx.textAlign = arg[1];
    ctx.fillStyle = arg[2];
    ctx.font = arg[3]+"px "+arg[4];
    ctx.fillText(arg[0], arg[5]*cordX, arg[6]*cordY);
}


function drawStatic(){
    //left top line
    lineDraw([200,20,200,120,"white"]);
    //SPEED
    textDraw(["SPEED","center","green",fontSize, "Arial", 100, 20+fontSize]);
    //FINAL APP
    textDraw(["FINAL APP","center","green",fontSize, "Arial", 300, 20+fontSize]);
    //middle top line
    lineDraw([400,20,400,120,"white"]);   
    //MDA
    var doSmall=1;
    if (cordX/cordY<1){
        doSmall=cordX/cordY;
    }
    textDraw(["MDA","center","white",fontSize*doSmall, "Arial", 430, 120]);
    //940
    textDraw(["940","center","#66FFFF",fontSize/1.2*doSmall, "Arial", 470, 120]);
    //right top line
    lineDraw([500,20,500,120,"white"]);
    //AP1
    textDraw(["AP1","left","green",fontSize, "Arial", 520, 16+1*fontSize]);
    //1FD2
    textDraw(["1FD2","left","green",fontSize, "Arial", 520, 20+2*fontSize]);
    //A/THR
    textDraw(["A/THR","left","green",fontSize, "Arial", 510, 24+3*fontSize]);
    //3000
    textDraw(["3000","center","#66FFFF",fontSize, "Arial", 505, 74+3*fontSize]);
    //1013
    textDraw(["1013","center","#66FFFF",fontSize, "Arial", 500, 900]);
    //QNH
    textDraw(["QNH","center","#66FFFF",fontSize, "Arial", 500, 904+fontSize]);
}

function rectDraw(arg){
    ctx.fillStyle = arg[4];
    ctx.fillRect(arg[0]*cordX, arg[1]*cordY, arg[2]*cordX, arg[3]*cordY);
}

function speedStatic(){
    //rectangle
    rectDraw([40,175,90,650,"#404040"]);
    //top line
    lineDraw([40,175,140,175,"white"]);
    //vertical line
    lineDraw([130,175,130,825,"white"]);
    //bottom line
    lineDraw([40,825,140,825,"white"]); 
}

function heightStatic(){
    //right rectangle(height)
    rectDraw([470,175,90,650,"#404040"]);
    //top line
    lineDraw([465,175,575,175,"white"]);
    //vertical line
    lineDraw([560,175,560,825,"white"]);
    //bottom line
    lineDraw([465,825,575,825,"white"]);
}

function compassStatic(){
    //bottom rectangle
    rectDraw([170,850,260,100,"#404040"]);
        //top line
    lineDraw([170,850,430,850,"white"]);
        //left line
    lineDraw([170,850,170,950,"white"]);
        //right line
    lineDraw([430,850,430,950,"white"]);  
}

function static4Dynamic(){
    //speed(left)
    speedStatic();
    //height(right)
    heightStatic();
    //compass(bottom)
    compassStatic();
}

function drawDynamic(){
    static4Dynamic();
    
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