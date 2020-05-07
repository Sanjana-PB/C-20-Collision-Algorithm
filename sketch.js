var fixedrect , movingrect

function setup() {
  createCanvas(800,400);

  fixedrect = createSprite(400,200,50,80);
  fixedrect.shapeColor = "blue";

  movingrect = createSprite(100,100,80,50);
  movingrect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  drawSprites();

  movingrect.x = mouseX;
  movingrect.y = mouseY;
  
  if(movingrect.x - fixedrect.x < movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2
    && movingrect.y - fixedrect.y<movingrect.height/2 +fixedrect.height/2
    && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
    fixedrect.shapeColor = "purple";
    movingrect.shapeColor = "purple";
  }
  else{
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor = "blue";
  }
 
}