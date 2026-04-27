let nameInput, emailInput, categorySelect, ideaInput;
let submitImg;

let imgX, imgY, imgW, imgH;
let btnX, btnY, btnW, btnH;

function preload() {
  submitImg = loadImage("submit.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // P5 INPUTS
  nameInput = createInput();
  emailInput = createInput();

  categorySelect = createSelect();
  categorySelect.option('Character');
  categorySelect.option('Show');
  categorySelect.option('Style');
  categorySelect.option('Program');

  ideaInput = createElement('textarea');

  styleInput(nameInput);
  styleInput(emailInput);
  styleInput(categorySelect);
  styleInput(ideaInput);
}

function draw() {
  background('#4D3447');

  let scaleFactor = 0.8;
  imgW = submitImg.width * scaleFactor;
  imgH = submitImg.height * scaleFactor;

  imgX = width / 2 - imgW / 2;
  imgY = height / 2 - imgH / 2;

  image(submitImg, imgX, imgY, imgW, imgH);

  positionForm();

  // Title
  textAlign(CENTER);
  textSize(60);
  fill("#FDFAFA");
  textFont("Starbim");
  text(`SUBMIT PLS,<3`, width / 2, height / 7);

  // Compute submit button area
  btnX = imgX + imgW * 0.60;
  btnY = imgY + imgH * 0.78;
  btnW = imgW * 0.20;
  btnH = imgH * 0.08;
}

function positionForm() {
  let leftX = imgX + imgW * 0.12;
  let rightX = imgX + imgW * 0.56;

  let row1Y = imgY + imgH * 0.25;
  let row2Y = imgY + imgH * 0.60;

  let boxW = imgW * 0.30;
  let boxH = 40;

  nameInput.position(leftX, row1Y);
  nameInput.size(boxW, boxH);

  emailInput.position(rightX, row1Y);
  emailInput.size(boxW, boxH);

  categorySelect.position(leftX, row2Y);
  categorySelect.size(boxW, boxH);

  ideaInput.position(rightX, row2Y);
  ideaInput.size(boxW, boxH * 0.49);
}

function styleInput(el) {
  el.style("background", "#FEFEF3");
  el.style("border", "none");
  el.style("border-radius", "20px");
  el.style("padding", "19px");
  el.style("font-size", "16px");
}

function mousePressed() {
  // Submit click
  if (
    mouseX > btnX &&
    mouseX < btnX + btnW &&
    mouseY > btnY &&
    mouseY < btnY + btnH
  ) {
    document.getElementById("hName").value = nameInput.value();
    document.getElementById("hEmail").value = emailInput.value();
    document.getElementById("hCategory").value = categorySelect.value();
    document.getElementById("hIdea").value = ideaInput.value();

    document.getElementById("realSubmit").click();
  }
}
