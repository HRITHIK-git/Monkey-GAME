
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FG, oG
var survivalTime
var ground,ng

function preload(){

  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  
 
  
   ground=createSprite(300,335,1200,5)
  ground.x = ground.width /2;
  
  ng=createSprite(300,340,1200,5)
  ng.visible=false
  
       
  monkey = createSprite(50,300,5,5)
  monkey.addAnimation("mini",monkey_running)
  monkey.scale=0.12
  
  // banana= createSprite(600,120,20,20)
  // banana.addImage(bananaImage)
 
  oG = new Group()
  FG = new Group()
  

  
}


function draw() {
  background("white")
  
  
  
 monkey.velocityY = monkey.velocityY + 0.5
  
  monkey.collide(ng)
 
  
  ground.velocityX=-3
  
  if (ground.x < 0)
  {
  ground.x = ground.width/2;
  }

  if (keyDown("space") && monkey.y>=300 )
  {
    monkey.velocityY=-15
  }
  
  if (frameCount%80===0||frameCount%200===0)
  {
    if(frameCount%80===0)
  {
    bana();
  }
  
  if(frameCount%200===0)
  {
    og();
  }
  
  }

  drawSprites();
  
  survivalTime = 0;
  fill("white")                                  
  fill("black")
  var survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,350,50)
  
  
}


 function og()
 {
  obstacle=createSprite(600,310,90,95)
  obstacle.addImage(obstaceImage)
  obstacle.scale=0.15
   obstacle.velocityX = -3
   obstacle.lifetime=200;
  oG.add(obstacle)
 }

 function bana()
{
   banana= createSprite(600,round(random(120,200)),20,20)
   banana.addImage(bananaImage)
   banana.scale=0.1               
   banana.velocityX=-3
   banana.lifetime=200
   FG.add(banana)
 }

function scoring ()
{
  
}