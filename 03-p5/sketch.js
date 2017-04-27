'use strict';

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myCanvas');
}

function draw() {
}

function mousePressed() {
}

function mouseMoved() {
  fill('rgba(22,22,22,1)');
  noStroke();
  ellipse(mouseX, mouseY, 30, 30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
