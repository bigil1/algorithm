var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(300, 200, 100, 100);
  movingRect.shapeColor = "yellow";
}

function draw() {
  background("red");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x <= (fixedRect.width/2 + movingRect.width/2) 
  && fixedRect.x-movingRect.x <= (fixedRect.width/2 + movingRect.width/2)
  &&movingRect.y-fixedRect.y <= (fixedRect.height/2 + movingRect.height/2)
  && fixedRect.y-movingRect.y <= (fixedRect.height/2 + movingRect.height/2)
  ){
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }
  else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }

  drawSprites();
}