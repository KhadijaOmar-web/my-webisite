/*
 * HOMEWORK / Khadija / Feb 5, 2025
 * Description:
 * Interactive truck animation where the trailer and chassis
 * change size based on mouse movement. The truck drawing
 * is organized into its own function for clarity.
 */

let x; 
let trailer1;
let chassis1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  // THE ENGINE: x follows the mouse
  x = mouseX;

  // THE GROWTH: trailer + chassis respond to mouse movement
  trailer1 = map(mouseX, 0, 600, 400, 50, true);
  chassis1 = map(mouseX, 0, 300, 400, 220, true);

  truck();
}

function truck() {
  stroke(0);
  strokeWeight(3);

  // 1. MAIN TRAILER (with hue shift)
  let currentHue = map(mouseX, 0, width, 0, 345);
  fill(currentHue, 154, 356);
  rect(x + 50, 300, trailer1, 80);

  // 2. CAB
  fill("gold");
  rect(x - 35, 330, 85, 50);

  fill(currentHue, 345, 64);
  rect(x - 35, 360, 40, 20);

  // 3. CHASSIS BAR
  fill(currentHue, 345, 458);
  rect(x, 375, chassis1, 10);

  // 4. WHEELS
  fill(0);
  ellipse(x + 15, 395, 40, 40);
  ellipse(x + 130, 395, 40, 40);
  ellipse(x + 175, 395, 40, 40);
}
