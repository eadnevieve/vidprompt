let promptImg;
let img;
let stars = [];

// WORD LISTS
let words = {
  program: [
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "CapCut",
    "Alight Motion",
    "Videostar",
  ],

  style: [
    "Velocity", "Transition", "Juug", "Soft-style", "Candy",
    "Trailer", "Clip", "Lyric", "Flow", "Mograph", "3D", "Animation"
  ],

  show: ["Avatar: The Last Airbender", "Arcane", "Alice in Borderland"],

  charactersByShow: {
    "Avatar: The Last Airbender": ["Aang","Katara","Sokka","Zuko","Toph","Azula","Iroh","Suki","Ty Lee","Mai"],
    "Arcane": ["Vi","Jinx","Caitlyn","Jayce","Viktor","Ekko","Silco","Mel","Heimerdinger","Sevika"],
    "Alice in Borderland": ["Arisu","Usagi","Chishiya","Kuina","Niragi","Aguni","Hatter","Tatta","Ann","Mira"]
  }
};

let myFont;
let myDont;

function preload() {
  img = loadImage("img/bgprompt.png"); // background
  promptImg = loadImage("prompt.png"); // TV frame
  myFont = loadFont("Starbim.otf");
  myDont = loadFont("Dareo.otf");
}

let fields = [
  { label: "character", value: "" },
  { label: "show", value: "" },
  { label: "style", value: "" },
  { label: "program", value: "" },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);
}

function draw() {
  background("#C03556");

  // BACKGROUND IMAGE
  if (img) {
    image(img, 0, 0, windowWidth, windowHeight);
  }

  // COORDINATE DEBUG
  fill(255);
  textSize(16);
  text(mouseX + ", " + mouseY, mouseX + 10, mouseY - 10);

  // MENU
  textFont(myDont);
  textSize(40);
  fill("#FFEFD6");
  textAlign(RIGHT, CENTER);
  text("home", width - 40, 60);
  text("generator", width - 40, 110);
  text("submit", width - 40, 160);

  // Switch back to Starbim
  textFont("Starbim");

  // CENTER PROMPT PNG
  let scaleFactor = 0.8;
  let imgW = promptImg.width * scaleFactor;
  let imgH = promptImg.height * scaleFactor;
  let imgX = width / 2 - imgW / 2;
  let imgY = height / 2 - imgH / 2;

  image(promptImg, imgX, imgY, imgW, imgH);

  // STAR HITBOXES
  stars = [
    { field: "characterShow", x: imgX + imgW * 0.375, y: imgY + imgH * 0.825, r: 28 },
    { field: "style",         x: imgX + imgW * 0.445, y: imgY + imgH * 0.825, r: 28 },
    { field: "program",       x: imgX + imgW * 0.515, y: imgY + imgH * 0.825, r: 28 },
    { field: "all",           x: imgX + imgW * 0.585, y: imgY + imgH * 0.825, r: 28 }
  ];

  // DRAW STAR SHAPES
  let colors = ["#B24155", "#F3C9E2", "#CC448A", "#6D6B45"];
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    drawStar(s.x, s.y, s.r, colors[i]);
  }

  // DRAW PROMPT TEXT
  drawColoredPrompt(imgX, imgY, imgW, imgH);
}

// ---------------------- STAR SHAPE ----------------------
function drawStar(x, y, radius, color) {
  fill(color);
  noStroke();
  beginShape();
  for (let i = 0; i < 10; i++) {
    let angle = PI / 5 * i;
    let r = (i % 2 === 0) ? radius : radius / 2;
    vertex(x + cos(angle) * r, y + sin(angle) * r);
  }
  endShape(CLOSE);
}

// ---------------------- PROMPT TEXT ----------------------
function drawColoredPrompt(imgX, imgY, imgW, imgH) {
  let leftX = imgX + imgW * 0.15;
  let rightX = imgX + imgW * 0.5;
  let maxWidth = rightX - leftX;

  let y1 = imgY + imgH * 0.22;
  let y2 = imgY + imgH * 0.33;
  let y3 = imgY + imgH * 0.44;
  let y4 = imgY + imgH * 0.5;

  drawPromptLine(
    [{ text: "Edit ", color: "#4D3447" },
     { text: fields[0].value || "___", color: "#B24155", bg: "#F7F2CF" }],
    leftX, y1, maxWidth
  );

  drawPromptLine(
    [{ text: "from ", color: "#4D3447" },
     { text: fields[1].value || "___", color: "#6D6B45", bg: "#FFEFD6" }],
    leftX, y2, maxWidth
  );

  drawPromptLine(
    [{ text: "in a ", color: "#4D3447" },
     { text: fields[2].value || "___", color: "#F3C9E2", bg: "#FDFAFA" },
     { text: " style", color: "#4D3447" }],
    leftX, y3, maxWidth
  );

  drawPromptLine(
    [{ text: "using ", color: "#4D3447" },
     { text: fields[3].value || "___", color: "#CC448A", bg: "#FFEFD6" }],
    leftX, y4, maxWidth
  );
}

function drawPromptLine(segments, startX, y, maxWidth) {
  let padding = 4;
  let gap = 4;
  let boxHeight = 26;

  textSize(24);
  let widths = segments.map(s => textWidth(s.text) + padding * 2);
  let totalWidth = widths.reduce((a, b) => a + b, 0) + gap * (segments.length - 1);

  let size = 24;
  while (totalWidth > maxWidth && size > 10) {
    size--;
    textSize(size);
    widths = segments.map(s => textWidth(s.text) + padding * 2);
    totalWidth = widths.reduce((a, b) => a + b, 0) + gap * (segments.length - 1);
  }

  let x = startX;

  for (let i = 0; i < segments.length; i++) {
    let s = segments[i];

    if (s.bg) {
      fill(s.bg);
      noStroke();
      rect(x, y - boxHeight / 2, widths[i], boxHeight, 6);
    }

    fill(s.color);
    textAlign(CENTER, CENTER);
    text(s.text, x + widths[i] / 2, y);

    x += widths[i] + gap;
  }
}

// ---------------------- CLICK HANDLING ----------------------
function mousePressed() {
  for (let s of stars) {
    let d = dist(mouseX, mouseY, s.x, s.y);
    if (d < s.r) {
      if (s.field === "characterShow") assignCharacterShow();
      else if (s.field === "style") assignStyle();
      else if (s.field === "program") assignProgram();
      else if (s.field === "all") generateAll();
    }
  }
}

// ---------------------- WINDOW RESIZE ----------------------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
