var ship,ship_image;
var sea,seaImg;

function preload(){
  ship_image = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,150,400,20);
  sea.addImage("running",seaImg);

  sea.scale=0.5;

  ship = createSprite(200,250,30,30);
  ship.addAnimation("running",ship_image);

  ship.scale= 0.3;

}

function draw() {
  background("blue");

if (sea.x <0) {
  sea.x=sea.width/2;
 }

 drawSprites();
}