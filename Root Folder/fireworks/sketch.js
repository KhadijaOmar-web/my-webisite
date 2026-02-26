//*Title: Homework 5 - Grid of Fireworks
 //Author: Khadija Omar 
 //*Date: Feb 18 2026
 // Simple Description: randomized firework shapes  when *click  buttons using nested loops. Each firework is built with 5 rectangle’s and random spark
 //* Instructions: Click the mouse anywhere on the canvas to generate new random patterns.
 


function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100); 
  noLoop(); // to stops the flicker 
}

function draw() {
  background(0); // 
  let spacing = 100; // Size of the grid squares Khadija the spacing  ter

  // The 'i' loop moves right, the 'j' loop moves down I/j/k those let 
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      //  Find the center of each square
      let x = i * spacing + spacing / 2;
      let y = j * spacing + spacing / 2;

      
      drawSquareFirework(x, y);
    }
  }
}

// 5-RECTANGLE FIREWORK
function drawSquareFirework(x, y) {
  let numBars = 5; 
  let fHue = random(345); // Random color for each squre 

  for (let k = 0; k < numBars; k++) {
    push();
    translate(x, y); 
    // Spreads the 5 bars into a circle (TWO_PI)
    rotate(TWO_PI / numBars * k); 

    fill(fHue, 80, 100);
    stroke(1,245,99);
    
    
    
    rect(-4, random(-5, 10), 10, random(-30, 50)); 
    
    pop();
  }
}
//click the mouse kay
function mousePressed() {
  redraw();
}function drawSquareFirework(x, y) {
  let numBars = 5; 
  let fHue = random(360); // Random color for each star

  for (let k = 0; k < numBars; k++) {
    push();
    translate(x, y); 
    rotate(TWO_PI / numBars * k); 

    // --- THE COLORS ---
    fill(fHue, 80, 100);
    stroke(0);
    strokeWeight(9);
    
    // RECTANGLE 
  
    let distance = random(-5, 30);  // 
    let barLength = random(20, 50); //
    rect(-5, distance, 10, barLength); 
    
    
    
    pop();
  }
}

