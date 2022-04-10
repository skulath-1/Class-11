var trex;
var trexRunning;
var edges;
var ground;

//load animation, images, sound
function preload(){
 
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");


}

//CreateSprite,CreateCanvas
function setup(){
  //GAME AREA
  createCanvas(600,200);
  
  trex=createSprite(50,180,20,50);
  trex.addAnimation("running",trexRunning);
  trex.scale=0.5;
  edges=createEdgeSprites();

  ground= createSprite(200,180,400,20);
 
 
}

function draw(){
  background("black");

  if(keyDown("space")){
    trex.velocityY=-10;
  }

  //add Gravity
  trex.velocityY=trex.velocityY+1;

  trex.collide(ground)

  
  drawSprites();
}
