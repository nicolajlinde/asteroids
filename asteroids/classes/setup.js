
var SCENE_W = 1600;
var SCENE_H = 1000;

var cameraZoom;

function setup() {
  var canvas = createCanvas(1200, 500);
  canvas.parent('canvas');

  background(0);

  // Instantiate objects
  cameraZoom = new CameraZoom();
}

function draw() {
  cameraZoom.cameraZoomOut();

  background(0);

  textAlign(CENTER);
  fill(222);
  text('Click to create a new sprite', width / 2, height / 2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();

}

function mousePressed() {
  var s = createSprite(mouseX, mouseY, 30, 30);

  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
