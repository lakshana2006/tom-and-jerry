var bgImg;
var cat1Img,cat2Img,cat3Img,cat4Img;
var mouse1Img,mouse2Img,mouse3Img,mouse4Img;

var cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;

function preload() {
    //load the images here

  bgImg = loadImage("gardern.png");

  cat1Img = loadAnimation("images/cat1.png");
  cat2Img = loadAnimation("images/cat2.png");
  cat3Img = loadAnimation("images/cat3.png");
  cat4Img = loadAnimation("images/cat4.png");
  
  mouse1Img = loadAnimation("images/mouse1.png");
  mouse2Img = loadAnimation("images/mouse2.png");
  mouse3Img = loadAnimation("images/mouse3.png");
  mouse4Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat1 = createSprite(200,200);
    cat1.addAnimation("sitting",cat1Img);
    cat2 = createAnimation(200,200);
    cat2.addAnimation("walking",cat2Img);
    cat3 = createSprite(200,200);
    cat3.addAnimation("walking",cat3Img);
    cat4 = createSprite(200,200);
    cat4.addAnimation("standing",cat4Img);

    mouse1 = createSprite(400,400);
    mouse1.addAnimation("happy",mouse1Img);
    mouse2 = createSprite(400,400);
    mouse2.addAnimation("running",mouse2Img);
    mouse3 = createSprite(400,400);
    mouse3.addAnimation("teasing",mouse3Img);
    mouse4 = createSprite(400,400);
    mouse4.addAnimation("searching",mouse4Img);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse1.x < (cat.width - mouse.width)/2){
        
        //write code to change animation
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keycode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg3);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }
else if (keycode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
   }
}
