
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x);
  //group
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  createCanvas(400,400);
background("white");
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime =Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+survivalTime,100,50);
  
  if (ground.x<0){
    
    ground.x=ground.width/2;
      
      }
  
  monkey.collide(ground);
  
  if (keyDown("space")&& monkey.y >= 140)
    {
    monkey.velocityY = -10;
    
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  bananas();
  obstacles();
  drawSprites();
}

function bananas ()
{
 if (World.frameCount%80==0)
 {
    banana = createSprite(180,random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
   
}

function obstacles ()
{
 if (World.frameCount%300==0)
 {
    obstacle = createSprite(random(120,200),315);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
   
}


