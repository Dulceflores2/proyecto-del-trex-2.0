var PLAY = 1;
var END = 0;
var gameState = PLAY ;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
 var obsatcleGroup, obstacle1,obstacle2, obstacle3, obctacle4, obstacle5, obstacle6
var cloud, cloudGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  gameover = loadImage("gameOver.png");
  restart = loadImage( "restart.png");
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
 resartImg = loadImage("resart.png");
 gameoverImg = loadImage("gameOver.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;

  gameover = createSprite (300,100);
  gameOver = addImage(gameOverImg)
 
  resart = createSprite(300,140);
  resart = addImage(resartImag)
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  obstacleGroup= new Group();
  cloudGroup = new Group ();
  
  console.log("Hola"+ 5)
  score=0
}

function draw() {
  background(180);
  text("puntuacion:"+ score,500, 50);
  if(gameState === PLAY){
    //mover el suelo
    ground.velocityX = -4;
    score= score + Math.round(frameCount/60);
    if (ground.x < 0){
      ground.x = ground.width/2;
    
    }
    if(keyDown("space")&& trex.y >= 100) {
      trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    
   //aparecer nubes
    spawnClouds();
    spawnObstacles();
    trex.collide(invisibleGround);
    if (obstacleGroup.istouching(trex)){
      gameState= END
    }
    
  }
  
  else if(gameState === END){
    //detener el suelo 
    ground.velocityX=0
  }
 
  
  
  
  
 
  
  drawSprites();
}

function spawnClouds() {
  //escribir aquí el código para aparecer las nubes 
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)

    cloud.y = Math.round(random(10,60))
    
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    cloudGroup.add(cloud);

    
    
    //asignar lifetime a la variable
    cloud.lifetime = 230
    
    //ajustar la profundidad
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
  
    
}
function spawnObstacles() {
  if (frameCount % 60 === 0){
    var obstacle = createSprite (600,165,10,40);
    obstacle.velocityX= -4 ;
     var rand = Math.round(random(1,6));
     switch (rand){
     case 1 : obstacle.addImage(obstacle1);
           break;
     case 2 : obstacle.addImage(obstacle2);
           break;
     case 3 : obstacle.addImage(obstacle3);
           break;
     case 4 : obstacle.addImage(obstacle4);
            break;
     case 5: obstacle.addImage(obstacle5);
             break;
     case 6 : obstacle.addImage(obstacle6);
             break;
     default: break; 
     }
     obstacle.scale = 0.7;
     obstacle.lifetime = 300;
     obstacleGroup.add(obstacle);
  
}
}
 
  



