// Name: Nested For Loop with Mouse Interaction
// Simple typewriter effect
// Pippin Barr

let string = `
Hello! 
Welcome to the video editing prompt generator.
`;

let currentCharacter = 0;
let pageMargin = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#CC448A");

  let currentString = string.substring(0, currentCharacter);

  // Page background
  push();
  fill("#CC448A");
  noStroke();
  rect(pageMargin, pageMargin, width - pageMargin * 2, height - pageMargin);
  pop();

  // Typewriter text
  push();
  fill("#F3C9E2");
  textSize(90);
  textFont("Starbim");
  textAlign(LEFT, TOP);
  text(
    currentString,
    pageMargin + 10,
    pageMargin + 10,
    width - pageMargin * 2,
    height - pageMargin,
  );
  pop();

  currentCharacter += 0.15;

  // MENU (top-right)
  textFont("Dareo");
  textSize(40);
  fill("#FFEFD6");
  textAlign(RIGHT, CENTER);

  text("home", width - 40, 60);
  text("generator", width - 40, 110);
  text("submit", width - 40, 160);

  textFont("Starbim");
}

function mousePressed() {
  // MENU CLICKS
  if (mouseX > width - 200 && mouseX < width) {
    if (mouseY > 40 && mouseY < 80)
      window.location.href =
        "https://editor.p5js.org/eadnevieve/full/dqBBVFUm4";
    if (mouseY > 90 && mouseY < 130)
      window.location.href =
        "https://editor.p5js.org/eadnevieve/full/RfhmAIVvR";
    if (mouseY > 140 && mouseY < 180)
      window.location.href =
        "https://editor.p5js.org/eadnevieve/full/Miji2AV-0";
  }
}
