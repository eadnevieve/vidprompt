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
  background('#CC448A');

  let currentString = string.substring(0, currentCharacter);

  // Page background
  push();
  fill('#CC448A');
  noStroke();
  rect(pageMargin, pageMargin, width - pageMargin * 2, height - pageMargin);
  pop();

  // Typewriter text
  push();
  fill('#F3C9E2');
  textSize(90);
  textFont("Starbim");
  textAlign(LEFT, TOP);
  text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin * 2, height - pageMargin);
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
      window.location.href = "sketch.js";
    if (mouseY > 90 && mouseY < 130)
      window.location.href = "2sketch.js";
    if (mouseY > 140 && mouseY < 180)
      window.location.href = "3sketch.js";
  }
}

    
//Orange Hello
  //fill ('#6D6B45');  
  //textSize(25);
  //textFont("Outline Style"); 
  //text("Interact", width/4, height/1.2);
  
  //Red Hello
  //fill ('#C03556');  
  //textSize(25);
  //textFont("Outline Style"); 
  //text("Resources", width/2, height/1.2);
  
   //Purple Hello
  //fill ('#B24155'); 
  //textSize(25);
  //textFont("Outline Style");
  //text("Submit", width/1.2, height/1.2);

//CC448A
//F3C9E2
//C03556
//FBF0F6
//6D6B45
//F7F2CF
//4D3447
//FDFAFA
//FFEFD6
//B24155
