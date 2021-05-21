canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_width = 120;
var rover_height = 70;
var rx = 10;
var ry = 10;
var background_img= "racing.jpg";
var rover_image = "car1.png";
var cw  = 120; 
var ch = 70;
var car2 = "animated-car-clipart-10.png"
cx = 10;
cy = 100;
function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src =background_img;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;

car_imgTag = new Image();
car_imgTag.onload = uploadcar;
car_imgTag.src = rover_image;
}

function uploadBackground(){
   ctx.drawImage(background_imgTag, 0, 0, canvas.width,canvas.height);
}

function uploadcar(){
   ctx.drawImage(car_imgTag, cx, cy,  cw, ch);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rx, ry, rover_width, rover_height);
 }
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
   keyPressed = e.keyCode;
   console.log(keyPressed);
   if(keyPressed == '37')
   {
       left();
       console.log("left");
   }
   if(keyPressed == '39')
   {
       right();
       console.log("right");
   }
   if (keyPressed == '38')
{
   up();
   console.log("up");
}
if(keyPressed == '40')
{
   down();
   console.log("down");
}

}

