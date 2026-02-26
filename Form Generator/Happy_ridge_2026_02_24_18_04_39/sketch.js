 function setup() {
  createCanvas(600, 600); 
}

function draw() {
  background(220);
  
  // THE ENGINE: x follows the mouse
  let x = mouseX; 
  
  // THE GROWTH: The trailer width grows when you move the mouse
  // map(value, low1, high1, low2, high2)
  let trailerZ= map(mouseX, 0, 600, 50, 250);

  stroke(0);
  strokeWeight(3);
  fill(255); 

  // 1. THE MAIN TRAILER
  // We use trailerW so the size changes for the assignment
  rect(x + 50, 300, trailerZ, 80); 

  // 2. THE CAB 
  // We subtract from x so the cab stays in FRONT of the trailer 
//note to self x=mouseX  and it is replacing nbumber like 150
  rect(x - 35, 330, 85, 50); 
  rect(x - 35, 360, 40, 20); 

  // 3. THE CHASSIS BAR
  rect(x, 375, 220, 10); 

  // 4. THE WHEELS
  // These also move with x so they stay under the truck
  ellipse(x + 15, 395, 40, 40); 
  ellipse(x + 130, 395, 40, 40); 
  ellipse(x + 175, 395, 40, 40); 
}