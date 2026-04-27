// =========================
// GLOBAL VARIABLES
// =========================
let imgX, imgY, imgW, imgH;
let nameInput;
let fontSelect;
let foodRadio;
let submitImg;

// =========================
// PRELOAD
// =========================
function preload() {
  submitImg = loadImage("submit.png");
}

// =========================
// SETUP
// =========================
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create inputs (but don't position yet)
  nameInput = createInput();
  foodRadio = createRadio();
  fontSelect = createSelect();

  // Radio options
  foodRadio.option('#F7F5BC', 'Name');
  foodRadio.option('#B8E3FF', 'Email');
  foodRadio.option('#C79A9A', 'Category');

  // Dropdown options
  fontSelect.option('Dareo');
  fontSelect.option('Cursive');
  fontSelect.option('Boo');

  fontSelect.changed(fontChanged);
}

// =========================
// DRAW LOOP
// =========================
function draw() {
  background("#4D3447");

  // --- Compute PNG position ---
  let scaleFactor = 0.8;
  imgW = submitImg.width * scaleFactor;
  imgH = submitImg.height * scaleFactor;
  imgX = width / 2 - imgW / 2;
  imgY = height / 2 - imgH / 2;

  // Draw PNG
  image(submitImg, imgX, imgY, imgW, imgH);

  // --- Position inputs relative to PNG ---
  nameInput.position(imgX + 120, imgY + 140);
  foodRadio.position(imgX + 120, imgY + 220);
  fontSelect.position(imgX + 120, imgY + 300);

  // --- MENU (top-right) ---
  textFont("Dareo");
  textSize(40);
  fill("#FFEFD6");
  textAlign(RIGHT, CENTER);

  text("home", width - 40, 60);
  text("generator", width - 40, 110);
  text("submit", width - 40, 160);
  text("resources", width - 40, 210);

  // --- Header text ---
  textFont("Starbim");
  textSize(60);
  fill("#FDFAFA");
  text(`Submit PLS,<3 ${nameInput.value()}`, width / 2, height / 5);

  // Mouse position (debug)
  fill(255);
  textSize(20);
  text(`${mouseX}, ${mouseY}`, 200, 20);
}

// =========================
// FONT CHANGE HANDLER
// =========================
function fontChanged() {
  let fontSelection = fontSelect.value();
  textFont(fontSelection);
}

// =========================
// MENU CLICKS
// =========================
function mousePressed() {
  if (mouseX > width - 200 && mouseX