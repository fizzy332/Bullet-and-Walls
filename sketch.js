var car,wall,speed,weight,thickness

function setup() {
  createCanvas(1600,400);
 speed=random(223,321)
 weight=random(30,52)
 car=createSprite(50,200,50,10)
 car.velocityX=speed
 thickness=random(22,83)
 wall=createSprite(1200,200,thickness,height/2)
}

function draw() {
  background(0);  
  
  if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(deformation<12)
{
  wall.shapeColor=color(0,255,0);
}
if(deformation>12)
{
  wall.shapeColor=color(255,0,0);
}

  }
  drawSprites();
}
