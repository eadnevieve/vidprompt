// Define the inputs for this form as global variables.
let nameInput;
let fontSelect;
let foodRadio;
let submitImg;

function preload() {
  submitImg = loadImage("submit.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#C03556');
    fill('#FBF0F6');

  // Assign an input box to nameInput.
  nameInput = createInput();
  nameInput.position(width / 2, height / 2);

  // Assign radio buttons to foodRadio.
  foodRadio = createRadio();
  foodRadio.position(width / 2, height /1.5);

  // List the radio options for foodRadio, along
  // with the background color associated with each selection.
  foodRadio.option('#F7F5BC', 'Name');
  foodRadio.option('#B8E3FF', 'Email');
  foodRadio.option('#C79A9A', 'Category');

  // Assign a select dropdown to fontSelect.
  fontSelect = createSelect();
  fontSelect.position(width / 4, height / 2);

  // List out the dropdown options for fontSelect.
  fontSelect.option('Dareo');
  fontSelect.option('Cursive');
  fontSelect.option('Boo');

  // If the fontSelect selection is changed, call the
  // fontChanged function.
  fontSelect.changed(fontChanged);
}

function draw() {
 
  let backgroundColor = foodRadio.value();
  background('#4D3447');
  
   // Center submit PNG
  let scaleFactor = 0.8;
  let imgW = submitImg.width * scaleFactor;
  let imgH = submitImg.height * scaleFactor;
  let imgX = width / 2 - imgW / 3;
  let imgY = height / 2 - imgH / 3;

  image(submitImg, imgX, imgY, imgW, imgH);
  
 // MENU (top-right)
  textFont("Dareo");
  textSize(40);
  fill("#FFEFD6");
  textAlign(RIGHT, CENTER);

  text("home", width - 40, 60);
  text("generator", width - 40, 110);
  text("submit", width - 40, 160);

  // Switch back to Starbim
  textFont("Starbim");

  // Create the header for the form.
  textSize(25);
  textFont(`Outline style`);
  text('Hello', CENTER);

  // Create the text inputs that will update with the
  // new user inputs.
textSize(60);
    textFont(`Starbim`);  
    fill("#FDFAFA");
  text(`Submit PLS,<3 ${nameInput.value()}`, width / 2, height / 5);


}

function fontChanged() {
  // When the fontSelect value is changed,
  // update the canvas's font selection to the
  // new value.
  let fontSelection = fontSelect.value();
  textSize(20);
  textFont(fontSelection);
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