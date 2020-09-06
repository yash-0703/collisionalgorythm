var fixedrect;
var object1,object2,object3,object4;

var movingrect;
function setup() {
 
  createCanvas(1200,800);

  fixedrect = createSprite (600,400,50,80);
  movingrect = createSprite (400,200,80,30);
  fixedrect.shapeColor="blue";
  movingrect.shapeColor="blue";
  fixedrect.debug=true;
  movingrect.debug=true;
  object1 = createSprite(100,100,50,50);
  object1.shapeColor="orange";
  object2 = createSprite(200,100,50,50);
  object2.shapeColor="orange";
  object3 = createSprite(300,100,50,50);
 object3.shapeColor="orange";
 object4 = createSprite(400,100,50,50);
  object4.shapeColor="orange";
fixedrect.velocityX=2;
fixedrect.velocityY=-3;
movingrect.velocityX=-3;
movingrect.velocityY=2;


}

function draw() {
  background(255,255,255);  
 
//movingrect.y=World.mouseY;
//movingrect.x=World.mouseX;
text(movingrect.x-fixedrect.x,200,200);
//if(isTouching(movingrect,object4)){
 //object4.shapeColor="red";
  //movingrect.shapeColor="red";
//}
//else{
  //object4.shapeColor="blue";
  //movingrect.shapeColor="blue";
 
//}
bounceoff(movingrect,fixedrect);
drawSprites();
}
function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 &&
    obj2.x-obj1.x<obj1.width/2+obj2.width/2 &&
    obj1.y-obj2.y<obj1.height/2+obj2.height/2 &&
    obj2.y-obj1.y<obj1.height/2+obj2.height/2){
    return true;
  }
  else {
    return false;
  }

}
function bounceoff(ob1,ob2){
  if(ob1.x-ob2.x<ob1.width/2+ob2.width/2 &&
    ob2.x-ob1.x<ob1.width/2+ob2.width/2 ){

    ob1.velocityX=ob1.velocityX * (-1);
    ob2.velocityX=ob2.velocityX * (-1);
   
   
  }
  else if ( ob1.y-ob2.y<ob1.height/2+ob2.height/2 &&
    ob2.y-ob1.y<ob1.height/2+ob2.height/2){
      ob1.velocityY=ob1.velocityY * (-1);
      ob2.velocityY=ob2.velocityY * (-1);
  }
} 
