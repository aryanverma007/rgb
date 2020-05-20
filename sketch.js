
var r = 0;
var g = 50;
var b=255;
var mouse;


function setup(){
  createCanvas(255,400);
}


function draw(){
  background(r,g,b);
  
  mouse = ellipse(mouseX,200,10,10)

  mouse = map(mouseX, 0, width, 0, 255, true);

  r = map(mouseX, 0, 255, 0, 100);
  g = map(mouseX, 0, 255, 0, 100);
  b = map(mouseX, 0, 255, 0, 100);




  // Remember to fill the canvas with white paint before creating the ellipse.
 // drawsprites();
}