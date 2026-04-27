let promptImg;

// WORD LISTS
let words = {
  program: [
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "CapCut",
    "Alight Motion",
    "Videostar"
  ],

  style: [
    "Velocity",
    "Transition",
    "Juug",
    "Soft-style",
    "Candy",
    "Trailer",
    "Clip",
    "Lyric",
    "Flow",
    "Mograph",
    "3D",
    "Animation"
  ],

  show: [
    "Avatar: The Last Airbender",
    "Arcane",
    "Alice in Borderland"
  ],

  charactersByShow: {
    "Avatar: The Last Airbender": [
      "Aang","Katara","Sokka","Zuko","Toph","Azula","Iroh","Suki","Ty Lee","Mai"
    ],

    "Arcane": [
      "Vi","Jinx","Caitlyn","Jayce","Viktor","Ekko","Silco","Mel","Heimerdinger","Sevika"
    ],

    "Alice in Borderland": [
      "Arisu","Usagi","Chishiya","Kuina","Niragi","Aguni","Hatter","Tatta","Ann","Mira"
    ]
  }
};

let myFont;
let myDont;

// FIELDS
let fields = [
  { label: "character", value: "" },
  { label: "show", value: "" },
  { label: "style", value: "" },
  { label: "program", value: "" }
];

// Stars (positions updated in draw)
let stars = [];

function preload() {
  myFont = loadFont('Starbim.otf');
  myDont = loadFont('Dareo.otf');
  promptImg = loadImage("prompt.png");
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);
}

function radialGradient(x, y, innerColor, outerColor, radius) {
  noFill();
  for (let r = radius; r > 6; r -= 2) {
    let t = r / radius;
    let c = lerpColor(outerColor, innerColor, 1 - t);
    stroke(c);
    ellipse(x, y, r * 2, r * 2);
  }
}

function draw() {
  // ⭐ YOUR GRADIENT BACKGROUND
  let inner = color("#FFEFD6");
  let outer = color("#CC448A");
  let radius = max(windowWidth, windowHeight);
  radialGradient(width / 2, height / 2, inner, outer, radius);

  // MENU
  textFont("Dareo");
  textSize(40);
  fill("#FFEFD6");
  textAlign(RIGHT, CENTER);
  text("home", width - 40, 60);
  text("generator", width - 40, 110);
  text("submit", width - 40, 160);
  text("resources", width - 40, 210);

  // Switch back to Starbim
  textFont("Starbim");

  // ⭐ CENTER PROMPT PNG
  let scaleFactor = 0.8;
  let imgW = promptImg.width * scaleFactor;
  let imgH = promptImg.height * scaleFactor;
  let imgX = width / 2 - imgW / 2;
  let imgY = height / 2 - imgH / 2;

  image(promptImg, imgX, imgY, imgW, imgH);

  // ⭐ STAR POSITIONS (relative to PNG)
  stars = [
    { field: "characterShow", x: imgX + imgW * 0.25, y: imgY + imgH * 0.89, r: 28 },
    { field: "style",         x: imgX + imgW * 0.35, y: imgY + imgH * 0.89, r: 28 },
    { field: "program",       x: imgX + imgW * 0.45, y: imgY + imgH * 0.89, r: 28 },
    { field: "all",           x: imgX + imgW * 0.58, y: imgY + imgH * 0.89, r: 28 }
  ];

  // ⭐ DEBUG CIRCLES (delete later)
  noFill();
  stroke("lime");
  strokeWeight(0);
  for (let s of stars) {
    circle(s.x, s.y, s.r * 1);
  }

  drawColoredPrompt();

  // Mouse position (debug)
 // fill(255);
  //textSize(20);
  //text(`${mouseX}, ${mouseY}`, 200, 20);
}

// CENTERING TEXT
function drawColoredPrompt() {
  let leftX = 603;
  let rightX = 864;
  let maxWidth = rightX - leftX;

  let y1 = 260;
  let y2 = 289;
  let y3 = 318;
  let y4 = 347;

  drawPromptLine(
    [
      { text: "Edit ", color: "#4D3447", bg: null },
      { text: fields[0].value || "___", color: "#B24155", bg: "#F7F2CF" }
    ],
    leftX, y1, maxWidth
  );

  drawPromptLine(
    [
      { text: "from ", color: "#4D3447", bg: null },
      { text: fields[1].value || "___", color: "#6D6B45", bg: "#FFEFD6" }
    ],
    leftX, y2, maxWidth
  );

  drawPromptLine(
    [
      { text: "in a ", color: "#4D3447", bg: null },
      { text: fields[2].value || "___", color: "#F3C9E2", bg: "#FDFAFA" },
      { text: " style", color: "#4D3447", bg: null }
    ],
    leftX, y3, maxWidth
  );

  drawPromptLine(
    [
      { text: "using ", color: "#4D3447", bg: null },
      { text: fields[3].value || "___", color: "#CC448A", bg: "#FFEFD6" }
    ],
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

// CHARACTER button
function assignCharacterShow() {
  let allShows = Object.keys(words.charactersByShow);
  let chosenShow = random(allShows);

  let list = words.charactersByShow[chosenShow];
  let chosenCharacter = random(list);

  fields[0].value = chosenCharacter;
  fields[1].value = chosenShow;
}

// Style button
function assignStyle() {
  let newWord = random(words.style);
  while (newWord === fields[2].value) newWord = random(words.style);
  fields[2].value = newWord;
}

// Program button
function assignProgram() {
  let newWord = random(words.program);
  while (newWord === fields[3].value) newWord = random(words.program);
  fields[3].value = newWord;
}

// ALL button
function generateAll() {
  assignCharacterShow();
  assignStyle();
  assignProgram();
}

// CLICKING
function mousePressed() {
  // MENU
  if (mouseX > width - 200 && mouseX < width) {
    if (mouseY > 40 && mouseY < 80) window.location.href = "index.html";
    if (mouseY > 90 && mouseY < 130) window.location.href = "2index.html";
    if (mouseY > 140 && mouseY < 180) window.location.href = "3index.html";
    if (mouseY > 190 && mouseY < 230) window.location.href = "4index.html";
  }

  // STAR CLICKS
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
