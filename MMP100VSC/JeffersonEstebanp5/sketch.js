function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  fill(0, 0, 255)
    circle(200, 500, 500);
  
  fill(255, 0, 0)
  textSize(32);
text('The Universe', frameCount, 139);
  
  fill(0,255,0)
  rect(0, 360, 650, 55, 0)
  
  fill(220,220,220)
  circle(190, 300, 100)
  
  fill(255,255,255)
  circle(frameCount, 50, 60)
  
  
  
  
 // A design for a simple flower
  fill(255, 204, 0)
  translate(380, 10);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 10, 20, 500);
    rotate(PI/5);
  }



}