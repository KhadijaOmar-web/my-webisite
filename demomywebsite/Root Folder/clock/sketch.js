/*
 * Title: Time‑Based Phone Animation
 * Author: Khadija Omar
 * Date: March 2026
 * Simple Description:
 *   This sketch displays a cycling series of images inside a phone frame,
 *   with a gradient background that shifts from sunrise to sunset.
 * a bird phone in  moves across the screen based on the current second.
 *
 * Instructions:
 *   Watch the images cycle automatically. The bird moves every second.
 *   No clicking just look
 */

let images = [];
let imgPhone, imgBird;

// 25 images total
let shuffleList = [
  "sunrise.png", // 0
  "Ker.png", // 1
  "lis.png", // 2
  "lon.png", // 3
  "md.png", // 4
  "Orleans.png", // 5
  "por.png", // 6
  "shang.png", // 7
  "bangkok.png", // 8
  "capetown.png", // 9
  "denmark.png", // 10
  "earth.png", // 11
  "hog.png", // 12
  "istanbul.png", // 13
  "japan.png", // 14
  "kenya.png", // 15
  "melbourne.png", // 16
  "newyork.png", // 17
  "school.png", // 18
  "sing.png", // 19
  "sunset.png", // 20
  "earth.png", // 21
  "japan.png", // 22
  "sunrise.png", // 23
  "flower.png", // 24
];

function preload() {
  imgPhone = loadImage("phone.png");
  imgBird = loadImage("bird.png");

  for (let i = 0; i < shuffleList.length; i++) {
    images[i] = loadImage(
      shuffleList[i],
      () => console.log("Loaded:", shuffleList[i]),
      () => {
        console.warn("FAILED:", shuffleList[i]);
        images[i] = null;
      }
    );
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  // Cycle through all images automatically
  let h = floor(frameCount / 60) % shuffleList.length;
  let s = second(); // Gradient background based on time of day

  drawTimeGradient(h); // image inside the phone screen

  if (images[h]) {
    image(images[h], 60, 60, 480, 480);
  } // Bird animation

  let birdX = map(s, 0, 59, 520, 30);
  image(imgBird, birdX, 120, 60, 40); // Phone image bird

  image(imgPhone, 0, 0, 600, 600);

  noFill(0);
  textSize(18);
}

// ---------------------------
// GRADIENT FUNCTION
// ---------------------------
function gradientBackground(topColor, bottomColor) {
  for (let y = 0; y < height; y++) {
    let t = y / height;
    let c = lerpColor(topColor, bottomColor, t);
    stroke(c);
    line(0, y, width, y);
  }
}

// ---------------------------
// TIMEBASED GRADIENT LOGIC
// ---------------------------
function drawTimeGradient(h) {
  let sunrise = color("#ffb36b"); // warm orange
  let day = color("#6bcfff"); // sky blue
  let sunset = color("#ff6b81"); // pink-red
  let night = color("#0b1d3a"); // deep navy
  if (h < 6) gradientBackground(night, sunrise);
  // early morning
  else if (h < 12) gradientBackground(sunrise, day);
  // morning → noon
  else if (h < 18) gradientBackground(day, sunset);
  // afternoon → sunset
  else gradientBackground(sunset, night); // sunset → night
}
