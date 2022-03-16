
let rate = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke();
  fill(3, 105, 175);
}

//ellipses will move faster when the right arrow key is pressed and will move backwards when the back arrow key is pressed
function draw() {
  drawEllipse()
  rate = rate + 0.01
  if (keyIsDown(LEFT_ARROW)) {
    rate = rate - 0.02;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rate = rate + 0.01;
  }
  
 
}


function drawEllipse() {
  background(0,10);
  // x and y grid of ellipses
  for (let x = 0; x <= innerWidth; x = x + 30) {
    for (let y = 0; y <= innerHeight; y = y + 30) {
      // starting point of each ellipse depends on mouseX and mouseY
      const xAngle = map(mouseX, 0, innerWidth, -4 * PI, 4 * PI);
      const yAngle = map(mouseY, 0, innerHeight, -4 * PI, 4 * PI);
      const angle = xAngle * (x / innerWidth) + yAngle * (y / innerHeight);
      const startX = x + 25 * cos(2 * PI * rate + angle);
      const startY = y + 25 * sin(2 * PI * rate + angle);

      ellipse(startX, startY, 10);
    }
  }

}

//ocean wave pallete - honolulu blue, Jungle Green, rich electric blue, ocean green with a tinge of blue
const COLORS = [[3, 105, 175], [48, 194, 165], [19, 148, 215], [68, 189, 194]];



let i = 1

//the ellipses will iterate through ocean colors everytime the spacebar key is pressed
function keyPressed() {
  if (keyCode === 32) {
    const [r, g, b] = COLORS[i];
    fill(r, g, b);
    i++
    if (i==COLORS.length) {
      i = 0
    }
  }
}


