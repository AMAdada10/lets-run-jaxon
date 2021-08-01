var jaxon, jaxon_running, jaxon_collided;
var path, invisibleGround,pathImage;

function preload() {
  jaxon_running = loadAnimation("runner-1.png", "runner-2.png");
  jaxon_collided = loadImage("jaxon.png");

  groundImage = loadImage("path.png")
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  jaxon = createSprite(50,160,20,50);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 0.5;
  
  //create a ground sprite
  Path = createSprite(200,180,400,20);
  Path.addImage("path",pathImage);
  Path.x = Path.width /2;
  Path.velocityX = -4;

  invisibleGround=createSprite(200,190,400,20);
  invisibleGround.visible=false
}

function draw() {
  background(220);

  //jump when the space button is pressed
  if (keyDown("space")&& jaxon.y>155) { 
    jaxon.velocityY = -10;
  }

  jaxon.velocityY = jaxon.velocityY + 0.8

  if (Path.x < 0) {
    Path.x = Path.width / 2;
  }

  jaxon.collide(invisibleGround);
  drawSprites();
}

