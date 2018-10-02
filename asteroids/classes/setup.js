function setup() {
  var canvas = createCanvas(1200, 500);
  canvas.parent('canvas');

  background(0);
}

function draw() {
  background(0);

  fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width / 2, height / 2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();
}

function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX, mouseY, 30, 30);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
