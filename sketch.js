var ball,bimg,pimg,paddle,edges;
function preload() {
  /* preload your images here of the ball and the paddle */
  bimg = loadImage ("ball.png");
 pimg = loadImage ("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball=createSprite(200,200,0,0);
  paddle=createSprite(370,200,0,0);
  
  /* assign the images to the sprites */
   ball.addImage("Ball",bimg);
  paddle.addImage("Paddle",pimg);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
 
  ball.bounceOff(edges[0]);
  
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(edges[2]);
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle,randomVelocity);
  
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges[3]);
  paddle.collide(edges[2]);

 
  
  
  if(keyDown(UP_ARROW))
  {
   paddle.y=paddle.y+20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  ball.velocityY=7;
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

