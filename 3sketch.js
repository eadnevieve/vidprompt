let nameInput, emailInput, categorySelect, ideaInput;
let submitImg;

let imgX, imgY, imgW, imgH;

function preload() {
  submitImg = loadImage("submit.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont("Dareo");

  // INPUTS
  nameInput = createInput();
  emailInput = createInput();

  categorySelect = createSelect();
  categorySelect.option('Character');
  categorySelect.option('Show');
  categorySelect.option('Style');
  categorySelect.option('Program');

  ideaInput = createElement('textarea');

  // STYLE THEM (so they match your boxes)
  styleInput(nameInput);
  styleInput(emailInput);
  styleInput(categorySelect);
  styleInput(ideaInput);
}

function draw() {
  background('#4D3447');

  // CENTER IMAGE PROPERLY
  let scaleFactor = 0.8;
  imgW = submitImg.width * scaleFactor;
  imgH = submitImg.height * scaleFactor;

  imgX = width / 2 - imgW / 2;
  imgY = height / 2 - imgH / 2;

  image(submitImg, imgX, imgY, imgW, imgH);

  // POSITION FORM ELEMENTS
  positionForm();

  // TITLE
  textAlign(CENTER);
  textSize(60);
  fill("#FDFAFA");
  textFont("Starbim");
  text(`SUBMIT PLS,<3 ${nameInput.value()}`, width / 2, height / 7);

  // MENU
  textFont("Dareo");
  textSize(40);
  fill("#FFEFD6");
  textAlign(RIGHT, CENTER);

  text("home", width - 40, 60);
  text("generator", width - 40, 110);
  text("submit", width - 40, 160);
  text("resources", width - 40, 210);
}

// 🎯 POSITIONING (THIS IS THE IMPORTANT PART)
function positionForm() {

  let leftX = imgX + imgW * 0.12;
  let rightX = imgX + imgW * 0.56;

  let row1Y = imgY + imgH * 0.22;
  let row2Y = imgY + imgH * 0.60;

  let boxW = imgW * 0.30;
  let boxH = 40;

  // NAME
  nameInput.position(leftX, row1Y);
  nameInput.size(boxW, boxH);

  // EMAIL
  emailInput.position(rightX, row1Y);
  emailInput.size(boxW, boxH);

  // CATEGORY
  categorySelect.position(leftX, row2Y);
  categorySelect.size(boxW, boxH);

  // IDEA
  ideaInput.position(rightX, row2Y);
  ideaInput.size(boxW, boxH * 2);
}

// 🎨 STYLE FUNCTION
function styleInput(el) {
  el.style("background", "#FBF0F6");
  el.style("border", "none");
  el.style("border-radius", "20px");
  el.style("padding", "20px");
  el.style("font-size", "16px");
}

// 🖱️ CLICK HANDLING
function mousePressed() {

  // MENU
  if (mouseX > width - 200 && mouseX < width) {
    if (mouseY > 40 && mouseY < 80)
      window.location.href = "index.html";

    if (mouseY > 90 && mouseY < 130)
      window.location.href = "2index.html";

    if (mouseY > 140 && mouseY < 180)
      window.location.href = "3index.html";

    if (mouseY > 190 && mouseY < 230)
      window.location.href = "4index.html";
  }

  // SUBMIT BUTTON AREA (approximate position)
  let btnX = imgX + imgW * 0.60;
  let btnY = imgY + imgH * 0.78;
  let btnW = imgW * 0.20;
  let btnH = imgH * 0.08;

 if (
  mouseX > btnX &&
  mouseX < btnX + btnW &&
  mouseY > btnY &&
  mouseY < btnY + btnH
) {
  // Fill hidden HTML form with p5.js values
  select("#hName").value(nameInput.value());
  select("#hEmail").value(emailInput.value());
  select("#hCategory").value(categorySelect.value());
  select("#hIdea").value(ideaInput.value());

  // Submit the hidden form
  document.getElementById("hiddenForm").submit();
}
}