var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisiblelock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  invisiblelock= createSprite(300,580,700,20)
  invisiblelock.visible=false;


}


function draw() {
  background(255);
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3; 
     
    }
    if(keyDown("right_arrow")){
  
      ghost.x = ghost.x + 3;
      
    }
    if(keyDown("up_arrow")){
  
      ghost.velocityY = -4;
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  if(tower.y > 400){ tower.y = 300 }
    
      spawnDoors();

if(ghost.isTouching(invisiblelock))
{
 gameState = "end" 
}
  
if(ghost.isTouching(climbersGroup))
{
 gameState = "end" 
}

  drawSprites();
}
  if (gameState === "end"){
    stroke("black");
    fill("black");
    textSize(40);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    //change the depth of the ghost and door
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1; 


     climbersGroup.add(climber);
}
 }