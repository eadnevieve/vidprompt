// Name: Nested For Loop with Mouse Interaction
// Simple typewriter effect
// Pippin Barr
let img;
let string = ` 
Welcome! 
`;
//to the video editing prompt generator.
let currentCharacter = 0;
let pageMargin = 25;
let myFont;
let myDont;

function preload() {
  img = loadImage('home2.svg'); 
  // Load a custom font before the sketch starts
  myFont = loadFont('Starbim.otf');
  myDont = loadFont('Dareo.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    // Apply the loaded font
  textFont(myFont);
}

function draw() {
  background(img);

  // Photo bakcground
  //image(img,0, 0,windowWidth, windowHeight);
  
  let currentString = string.substring(0, currentCharacter);

  // Page background
  push();
  fill('#CC448A');
  noStroke();
  //rect(pageMargin, pageMargin, width - pageMargin * 2, height - pageMargin);
  pop();

  // Typewriter text
  push();
  fill('#6D6B45');
  textSize(200);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin * 2, height - pageMargin);
  pop();

  currentCharacter += 0.15;

  // MENU (top-right)
  textFont(myDont);
  textSize(40);
  fill("#4D3447");
  textAlign(RIGHT, CENTER);

  text("home", width - 40, 60);
  text("generator", width - 40, 110);
  text("submit", width - 40, 160);

  textFont(myFont);
}

function mousePressed() {
  // MENU CLICKS
  if (mouseX > width - 200 && mouseX < width) {
    if (mouseY > 40 && mouseY < 80)
      window.location.href = "index.html";
    if (mouseY > 90 && mouseY < 130)
      window.location.href = "2index.html";
    if (mouseY > 140 && mouseY < 180)
      window.location.href = "3index.html";
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
