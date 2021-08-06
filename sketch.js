var car , wall;
var speed , weight;
function setup() {
  createCanvas(800,400);

  speed = random(55,90);
  weight = random(400,1500);

  //create variables for car
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "225"
  

  //create variables for wall
  wall = createSprite(700,200,60,width/2);
}

function draw() {
  background("black");  
  if(wall.x-car.x<=(car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/22509
    if(deformation > 180){
      wall.shapeColor = "red"
    }
    if(deformation < 160 && deformation>100 ){
      wall.shapeColor = "yellow"
    }
    if(deformation < 100){
      wall.shapeColor = "green"
    }
  }
  drawSprites();
}