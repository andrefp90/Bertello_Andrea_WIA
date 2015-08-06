/*
     Name:Andrea Bertello Franco
     Date: August 6,2015
     Class & Section:  WIA-Sec 01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/
window.onload = function(){

 if(Modernizr.canvas){ 
    
 

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
var theCanvas = document.getElementById("Canvas1");
    if (theCanvas && theCanvas.getContext){
    var ctx = theCanvas.getContext("2d");
    
       if(ctx){
            
           ctx.fillStyle = "aqua";
           ctx.strokeStyle = "black";
           ctx.lineWidth = 2;
           
           
           ctx.strokeRect(0,0,50,100);
           ctx.fillRect(0,0,50,100);
    }
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

var theCanvas2 = document.getElementById("Canvas2");
    if (theCanvas2 && theCanvas2.getContext){
    var ctx2 = theCanvas2.getContext("2d");
    
       if(ctx2){
            
           ctx2.fillStyle = "rgba(255, 0, 0, .5)";
           ctx2.strokeStyle = "black";
           ctx2.lineWidth = 2;
           
           var degrees = 360;
           var radians = (degrees/180)*Math.PI;
           
           ctx2.beginPath();
           ctx2.arc(50 ,50 ,20, 0, radians);
            ctx2.fill();
          ctx2.stroke();
        
           
    }
}


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

    var theCanvas3 = document.getElementById("Canvas3");
    if (theCanvas3 && theCanvas3.getContext){
    var ctx3 = theCanvas3.getContext("2d");
    
       if(ctx3){
            
           ctx3.beginPath();
           
           ctx3.moveTo(185,81);
           ctx3.lineTo(207,128);
           ctx3.lineTo(259,136);
           ctx3.lineTo(221,172);
           ctx3.lineTo(229,224);    
           ctx3.lineTo(183,199);
           ctx3.lineTo(137,223);
           ctx3.lineTo(146,171);
           ctx3.lineTo(109,134);
           ctx3.lineTo(161,127);
           ctx3.lineTo(185,81);
           ctx3.closePath();
           ctx3.stroke();
        
           ctx3.fillStyle = "#E5CD55";
           ctx3.fill();
           ctx3.lineWidth= "8";
           ctx3.strokeStyle="black";
           
            
           
          
         
    }
}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
    
    var theCanvas4 = document.getElementById("Canvas4");
    if (theCanvas4 && theCanvas4.getContext){
    var ctx4 = theCanvas4.getContext("2d");
    
       if(ctx4){
           ctx4.strokeStyle ="red";
           ctx4.lineWidth= 3;
       ctx4.beginPath();
        ctx.moveTo(50,50);
      
           ctx4.bezierCurveTo(60,100,140,20,200,100);
          ctx4.bezierCurveTo( 195,100,180,85,170,100);
          ctx4.bezierCurveTo(165,100,150,85,140,100);
          ctx4.bezierCurveTo(135,100,120,85,100,100);
           ctx4.bezierCurveTo(105,100,70,85,60,100);
         
           
           ctx4.stroke();
           
       }}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

    var theCanvas5 = document.getElementById("Canvas5");
    if (theCanvas5 && theCanvas5.getContext){
    var ctx5= theCanvas5.getContext("2d");
    
       if(ctx5){
           ctx5.font="22pt Verdana";
           ctx5.fillStyle="#C64E4E";
           ctx5.strokeStyle="rgba(229,101,40,.8)"
           ctx5.fillText("Mikaela and Kiana",16,170);
           ctx5.strokeText("Mikaela and Kiana",18,170)
       
       }}
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

var theCanvas6 = document.getElementById("Canvas6");
    if (theCanvas6 && theCanvas6.getContext){
    var ctx6= theCanvas6.getContext("2d");
if(ctx6){
var srcImg = document.getElementById("img1");
    //ctx6.drawImage(srcImg, 0,0);
    //ctx6.drawImage(srcImg,50,50,1650,544);
   	
    //drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx6.drawImage(srcImg,2409,171,453,297,50,50,190,200);
}}
/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
 var theCanvas7 = document.getElementById("Canvas7");
    if (theCanvas7 && theCanvas7.getContext){
    var ctx7= theCanvas7.getContext("2d");
    
       if(ctx7){
        ctx7.fillStyle = "rgba(229,101,40,.7)";
           ctx7.strokeStyle = "black";
           ctx7.lineWidth = 2;
           
           //sun
           var degrees = 360;
           var radians = (degrees/180)*Math.PI;
           
           ctx7.beginPath();
           ctx7.arc(60 ,60 ,45, 0, radians);
            ctx7.fill();
          ctx7.stroke();
           
           //waves
           
           var srcImg2= document.getElementById("img2");
           	//drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh)
             ctx7.drawImage(srcImg2,597,105,403,230,0,220,300,80);
           
           //boat
           ctx7.strokeStyle="red";
           ctx7.fillStyle="blue";
           ctx7.lineWidth="4";
           
           ctx7.beginPath();
           ctx7.moveTo(179,216);
           ctx7.lineTo(310,216);
           ctx7.lineTo(283,269);
           ctx7.lineTo(205,269);
           ctx7.closePath();
           ctx7.fill();
           ctx7.stroke();
           
           //pole
           ctx7.beginPath();
           ctx7.moveTo(250,160);
           ctx7.lineTo(250, 250);
           ctx7.stroke();
           
           //rectangle
              ctx7.strokeStyle="black";
           ctx7.fillStyle="#80DEE5";
           ctx7.lineWidth="4";
           ctx7.beginPath();
           
        ctx7.strokeRect(200,150,100,20);
           ctx7.fillRect(200,150,100,20);
           
           //bird
           ctx7.beginPath();
           ctx7.moveTo(135,100);
           ctx7.bezierCurveTo(135,100,120,85,100,100);
           ctx7.bezierCurveTo(105,100,70,85,60,100);
         ctx7.stroke();
           
           
       }}

}else{
//Canvas is NOT supported
    
}}