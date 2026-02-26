/* * Title: Digital Coin Flip
* Author: Khadija Omar
* Date: Jan 27, 2026 
* Simple Description: A digital coin flip simulation that displays 'HEADS' or 'TAILS' 
* inside a colored ellipse centered on a red square.
* Instructions: Click anywhere on the screen to flip the coin.
*/

let coinResult = "CLICK ME"; 

function setup() {
  // Use windowWidth/Height to fill the screen
  createCanvas(400,400);
  
  rectMode(CENTER);      
  textAlign(CENTER, CENTER);
  textSize(40);
}

function draw() {
  background(115, 117, 117);

  // 1. Draw the Square
  fill("green"); // Added quotes here
  noStroke(); 
  rect(width / 2, height / 2, 300, 300);

  // 2. Draw the Coin (Ellipse)
  stroke(255, 78, 86);
  strokeWeight(10);
  
  if (coinResult === "HEADS") {
    fill("blue");
  } else {
    fill("violet"); // Your choice of violet here!
  }
  
  ellipse(width / 2, height / 2, 200, 200);

  // 3. Draw the Text
  noStroke(); 
  fill(255);  
  text(coinResult, width / 2, height / 2);
}

function mousePressed() {
  if (random(1) > 0.5) {
    coinResult = "HEADS";
  } else {
    coinResult = "TAILS";
  }
} // Removed the period that was here