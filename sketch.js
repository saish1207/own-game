var gameState = "round1"

var quiz = 0

var score = 0
var kay = 0

var background1 , background1Img ;
var ray,rayImg,rayJump
var inVisibleGround;
var obstaclesGroup,obstical,obstical1,obstical2,obstical3,obstical4,obstical5;
var slowGroup ;
var jumpSound,dieSound,gameOverSound;
var life1 , life2,life3,life4,life5,lifeImg;

var key,keyImg;
var kay = 0
var gameOverImg;

var question1,  question2,question3,question4;
var q1Img,q2Img,q3Img,q4Img

function preload(){
  background1Img = loadImage("a6.jpg")
  rayImg = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png")
  rayJump = loadImage("jump.png")
  falseimg = loadImage("FALSE.png")
  TERUEIMG = loadImage("TRUE.png")
  keyImg = loadImage("a4.png")
  gameOverImg = loadImage("game over.jpg")

  obstacle1 = loadImage("a 1.gif");
  obstacle2 = loadImage("a2.gif");
  obstacle3 = loadImage("a3.png");


  q1Img = loadImage("q1.png");


lifeImg = loadImage("heart.png")

  
 
  jumpSound = loadSound("jump.wav")
  dieSound = loadSound("die.wav")
  gameOverSound = loadSound("game over sound.wav")
  
}

function setup() {
  createCanvas(1400,900);
  background1 = createSprite(0, 0, 1400, 700);
  background1.addImage(background1Img);
  background1.velocityX = -7
  background1.scale = 3;

  ray = createSprite(100,530,10,10);
  ray.addAnimation("running",rayImg);
  ray.scale = 1.5
  inVisibleGround = createSprite(700,770,1200,20);
  inVisibleGround.visible = false ;

  key = createSprite(700,100,20,10)
  key.addImage(keyImg);
  key.scale = .2

  obstaclesGroup = createGroup();
  slowGroup = createGroup();

  life1 = createSprite(700,200,20,10)
  life1.addImage(lifeImg);
  life1.scale = .2

  life2 = createSprite(730,200,20,10)
  life2.addImage(lifeImg);
  life2.scale = .2

  life3 = createSprite(760,200,20,10)
  life3.addImage(lifeImg);
  life3.scale = .2

  life4 = createSprite(790,200,20,10)
  life4.addImage(lifeImg);
  life4.scale = .2

  life5 = createSprite(820,200,20,10)
  life5.addImage(lifeImg);
  life5.scale = .2










  
}

function draw() {
  background("black");  


if(gameState === "round1"){

  pow()

  if(background1.x<0){
    background1.x = background1.x + 700 ;
  }
 
  
  
  score = score + 1
  

  if (keyDown("space") && ray.collide(inVisibleGround)
  )
  {
    ray.velocityY = -30;
    ray.addImage(rayJump);
    jumpSound.play();
  }
  ray.velocityY = ray.velocityY + .9;

  
  spawnObstacles()
  question()
  
 

  ray.collide(inVisibleGround);

  if(obstaclesGroup.isTouching(ray)){
    obstaclesGroup.destroyEach(1);
    life1.destroy();
    dieSound.play();
  }


  if(obstaclesGroup.isTouching(ray)){
    
    obstaclesGroup.destroyEach(1);
    life2.destroy();
    dieSound.play();
  }


  if(obstaclesGroup.isTouching(ray)){

    obstaclesGroup.destroyEach(1);
    life3.destroy()
    dieSound.play();
  }

  if(obstaclesGroup.isTouching(ray)){
 
    obstaclesGroup.destroyEach(1);
    life4.destroy()
    dieSound.play();
  }

  if(obstaclesGroup.isTouching(ray)){
   
    obstaclesGroup.destroyEach(1);
    life5.destroy()
   ray.destroy();
    gameState = "end"
    dieSound.play();
  }

  
}
if(gameState === "end"){
  
  background(gameOverImg)
 ;

}


  drawSprites();
  
   fill("white")
  text("score"+score,300,60);
  textSize = 20;
  text("score"+score,300,60);

  fill("white");
  if(score>100 && score<500){
    textSize = 10 ;
    text("chose f key for false & chose t key for true",300,300)
  } 

  
  text("="+kay,750,100);

}
if(gameState === "end"){
  gameOverSound.play()
}

function spawnObstacles(){
if (frameCount % 200 === 0){
  var obstacle = createSprite(1500,700,10,30);
 

  obstacle.velocityX = - (4 + 3* score/100)
  
   //generate random obstacles

   var rand = Math.round(random(1,3));
   switch(rand) {
     case 1: obstacle.addImage(obstacle1);
             break;
     case 2: obstacle.addImage(obstacle2);
             break;
     case 3: obstacle.addImage(obstacle3);
             break;
     default: break;
     
   }

   


 obstacle. collide(inVisibleGround);
    obstaclesGroup.add(obstacle);
    
  
  }
 
}



function question(){

  if(score>100 && score<500){
  question1 = createSprite(300,100,10,20);
  question1.addImage(q1Img);
  question1.scale = 0.3 ;
  question1.lifetime = 10
  obstaclesGroup.setVelocityXEach(0);
  if (keyDown("t")){
    kay = kay +1 
    question1.destroy();

  }
  if (keyDown("f")){
    question1.destroy();
    kay = kay -1 

  }
  

  
  };

  if(score>1200 && score<1400){
   question2 = createSprite(300,90,10,20);
    //question2.addImage()
    question2.scale = 0.3 ;
  question2.lifetime = 10
    };

if(score>1900 && score<2100){
   question3 = createSprite(300,90,10,20);
    //question3.addImage()
    question3.scale = 0.3 ;
  question3.lifetime = 10
    };


    if(score>2600 && score<2800){
      question4 = createSprite(300,90,10,20);
       //question4.addImage()
       question4.scale = 0.3 ;
     question4.lifetime = 10;
       };

  }   




 
