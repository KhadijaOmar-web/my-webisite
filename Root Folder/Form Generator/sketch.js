 /*project 1/ Khadija Omar / Feb 9, 2025
 Description: moving truck with a sun and twinkling stars.
 */

let x; 
let trailer1;
let chassis1;
let stars = []; // Fixed: Added '=' 
let horizon = 400;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100); 

  // Created 30 stars inside setup so they only load ONCE
  for (let i = 0; i < 30; i++) { 
    stars.push({
      x: random(width),
      y: random(0, horizon),
      brightness: random(20, 100), 
      fade: random(1, 3)
    });
  }
}

function draw() {
  let sunHeight = mouseY; // spelling
  x = mouseX;

  // 1. SKY 
  if (sunHeight < horizon) {
    background(200, 40, 95); // Day
  } else {
    background(240, 80, 20); // Night
    
    // 2. STAR  (Drawn only at night)
    noStroke();
    for (let s of stars) {
      fill(0, 0, s.brightness);
      drawStar(s.x, s.y, 3, 8, 5); 
      s.brightness += s.fade;
      
      // Makes them twinkle
      if (s.brightness > 100 || s.brightness < 20) {
        s.fade *= -1;
      }
    }
  }

  // 3. THE SUN
  fill(50, 90, 100);
  noStroke();
  circle(300, sunHeight, 80);

  // 4. THE GRASS 
  fill(120, 60, 40);
  rect(0, horizon, width, height - horizon);

  // 5. TRUCK 
  trailer1 = map(mouseX, 0, 600, 400, 50, true);
  chassis1 = map(mouseX, 0, 300, 400, 220, true);

  truck(); // function for truck
}

function truck() {
  stroke(0);
  strokeWeight(3);

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

// Helper function for the spiky shape did get help for this part
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();// connting dote of stars
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;// left of center
    let sy = y + sin(a) * radius2;
    vertex(sx, sy); // rght of center
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}