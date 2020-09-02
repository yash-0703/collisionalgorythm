var fixedrect;
var movingrect;
function setup() {
  
  createCanvas(1200,800);

  fixedrect = createSprite (600,400,50,80)
  movingrect = createSprite (400,200,80,30)
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
movingrect.y=World.mouseY
movingrect.x=World.mouseX
}