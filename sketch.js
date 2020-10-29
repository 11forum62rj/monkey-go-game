
var monkey , monkey_running
var ground,invisibleGround, groundImage;
var banana ,bananaImage, obstacle, obstacleImage
var bananasGroup, obstaclesGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  groundImage = loadImage("ground.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 300);
  
  //making our monkey
  monkey = createSprite(30,240,20,50);
    //giving animation to  our monkey
  monkey.addAnimation("running", monkey_running);

  //making our monkey size small
  monkey.scale = 0.1;
  
  
   //creating our ground 
  ground = createSprite(200,270,400,20);
   //adding animation to our ground 
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  //making our invisible ground
  invisibleGround = createSprite(200,275,400,10);
  //making our ground get invisible
  invisibleGround.visible = false;
  
  var survivaltime = 0;
  

fruitGroup = createGroup();  
rocksGroup = createGroup();  
}



function draw() {
  background(220);
  
  stroke("white");
  textSize(20); 
  fill("white");
  text("score:" + score, 500,50)
  
  stroke("black");
  textSize(20); 
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 200,50)
  
  
  

  ground.velocityX = -4
  
  
  //reseting our ground
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
 
 //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 230 ) {
        monkey.velocityY = -13;
    }
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.7
    
    
    
  
 bananas();
 obstacles();
  
//stop trex from falling down
  monkey.collide(invisibleGround)
  
drawSprites();
  
  
  
}

function bananas(){
 if(frameCount % 80 === 0) {
   banana = createSprite(400,200,20,20);
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   
    
  
 
     banana.y = Math.round(random(100,210)) ;
     banana.velocityX = -7
     banana.Lifetime = 100;
     fruitGroup.add(banana);
    }   
}


function obstacles(){
 if(frameCount % 300 === 0) {
   obstacle = createSprite(400,200,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   
    
  
 
     obstacle.y = 250;
     obstacle.velocityX = -7
     obstacle.Lifetime = 100;
     rocksGroup.add(obstacle);
    }   
}







