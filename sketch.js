
 var object1G
 var object2G
 var object3G
 var object4G
 var tumblew
 var cowboy
 var shoot
 
 var shootg
 function preload(){
   cowboy = loadImage("cowboy.png")
   tumblew = loadImage("tumblew.png")
 }
function setup() {
  createCanvas(1000,800);
  
  ground= createSprite(500,750,1000,50)
  player= createSprite(500,700,50,100)
  player.addImage(cowboy);
  player.scale = 0.25;
  edges = createEdgeSprites();
  object1G = new Group();
  object2G = new Group();
  object3G = new Group();
  object4G = new Group();
  object5G = new Group();
  shootg = new Group();

  

  var shoot = createSprite(10,10,10,10)
  shoot.visible= false;

}

function draw() {
  
  background("black"); 
 if(keyDown(LEFT_ARROW)){

player.x= player.x-10;

 }
 
if(keyDown(RIGHT_ARROW)){
  player.x=player.x+10;

}


object1G.bounceOff(ground);
object2G.bounceOff(ground);
object3G.bounceOff(ground);
object4G.bounceOff(ground);
object5G.bounceOff(ground);
object1G.bounceOff(edges);
object2G.bounceOff(edges);
object3G.bounceOff(edges);
object4G.bounceOff(edges);
if(object1G.isTouching(ground)){
object1G.velocityY=4;

}
if(keyWentDown("space")){
  var shoot =createSprite(100,350,5,5);
  shoot.velocityY=-3;
 shoot.x=player.x;
 shoot.y =player.y;
  shoot.shapeColor="red";
  shootg.add(shoot);
  
}

spawnobjects();
spawnobjects2();
spawnobjects3();
spawnobjects4();




  drawSprites();
}
function spawnobjects(){
  if(frameCount % 100===0){
    var r1 = Math.round(random(100,700))
    var object1 = createSprite(0,r1,30,30)
    object1.velocityY=-2;
    object1.velocityX=2;

    object1.shapeColor=("blue");
    

    object1G.add(object1);
  }

}
function spawnobjects2(){
  if(frameCount% 500===0){
    var r2 = Math.round(random(100,700))
    var object2 = createSprite(0,r2,60,60)
    object2.velocityY=-2;
    object2.velocityX=2;
    object2G.add(object2);
   
  }
}
function spawnobjects3(){
  if(frameCount% 100===0){
    var r3 = Math.round(random(100,700))
    var object3 = createSprite(1000,r3,30,30)
    object3.velocityY=-2;
    object3.velocityX=-2;
    
    object3G.add(object3);
  }
}
function spawnobjects4(){
  if(frameCount% 500===0){
    var r4 = Math.round(random(100,700))
    var object4 = createSprite(1000,r4,60,60)
    object4.velocityY=-2;
    object4.velocityX=-2;
    object4G.add(object4);
  }
}
