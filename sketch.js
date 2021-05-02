var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800); 

  fixedRect=createSprite(200, 200, 50, 80);
  movingRect= createSprite(400,200,80,30);

  fixedRect.shapeColor="black";
  movingRect.shapeColor="black"
}

function draw() {
  background(66, 245, 155);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2){
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="purple"
  }
  else{
    fixedRect.shapeColor="black";
    movingRect.shapeColor="black";
  }

  console.log(movingRect.x-fixedRect.x)
  drawSprites();
}