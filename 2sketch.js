let promptImg;

//make sure starts are accessible to all functions, and not just mousePressed by declaring at the top of your sketch, which makes it 'global' and usable anywhere in the code. This way, you can define the stars array once and use it in both the draw function (to display the stars) and the mousePressed function (to check for clicks on the stars) without any issues.
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
    "Animation",
  ],

  show: ["Avatar: The Last Airbender", "Arcane", "Alice in Borderland"],

  charactersByShow: {
    "Avatar: The Last Airbender": [
      "Aang",
      "Katara",
      "Sokka",
      "Zuko",
      "Toph",
      "Azula",
      "Iroh",
      "Suki",
      "Ty Lee",
      "Mai",
    ],

    Arcane: [
      "Vi",
      "Jinx",
      "Caitlyn",
      "Jayce",
      "Viktor",
      "Ekko",
      "Silco",
      "Mel",
      "Heimerdinger",
      "Sevika",
    ],

    "Alice in Borderland": [
      "Arisu",
      "Usagi",
      "Chishiya",
      "Kuina",
      "Niragi",
      "Aguni",
      "Hatter",
      "Tatta",
      "Ann",
      "Mira",
    ],
  },
};

let myFont;
let myDont;

function preload() {
  myFont = loadFont("Starbim.otf");
  myDont = loadFont("Dareo.otf");
  promptImg = loadImage("prompt.png");
}

// FIELDS variable that holds an array of objects
let fields = [
  { label: "character", value: "" },
  { label: "show", value: "" },
  { label: "style", value: "" },
  { label: "program", value: "" },
];

// STAR BUTTONS (new roles)
// let stars = [
//   { field: "characterShow", x: 655, y: 470, r: 28 }, // star 1
//   { field: "style",         x: 705, y: 470, r: 28 }, // star 2
//   { field: "program",       x: 755, y: 470, r: 28 }, // star 3
//   { field: "all",           x: 805, y: 470, r: 28 }  // star 4
// ];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Apply the loaded font
  textFont(myFont);
}

function draw() {
  background("#C03556");

  // MENU (top-right)
  textFont(myDont);
  textSize(40);
  fill("#FFEFD6");
  textAlign(RIGHT, CENTER);

  text("home", width - 40, 60);
  text("generator", width - 40, 110);
  text("submit", width - 40, 160);

  // Switch back to Starbim
  textFont("Starbim");

  // Center prompt PNG
  let scaleFactor = 0.8;
  let imgW = promptImg.width * scaleFactor;
  let imgH = promptImg.height * scaleFactor;
  let imgX = width / 2 - imgW / 2;
  let imgY = height / 2 - imgH / 2;

  image(promptImg, imgX, imgY, imgW, imgH);

  // Instead of the hardcoded stars array at the top, they are now inside the draw function, so that they can use the imgX, imgY, imgW, and imgH variables to calculate their positions based on the prompt image. This ensures that the star buttons are correctly positioned relative to the prompt image, even if the image size or position changes:
  // after you calculate imgX, imgY, imgW, imgH...
  stars = [
    {
      field: "characterShow",
      x: imgX + imgW * 0.35,
      y: imgY + imgH * 0.82,
      r: 28,
    },
    { field: "style", x: imgX + imgW * 0.42, y: imgY + imgH * 0.82, r: 28 },
    { field: "program", x: imgX + imgW * 0.5, y: imgY + imgH * 0.82, r: 28 },
    { field: "all", x: imgX + imgW * 0.58, y: imgY + imgH * 0.82, r: 28 },
  ];

  //This callus up the function into draw with the imgX, imgY, imgW, and imgH parameters that are used to calculate the position and size of the prompt area, ensuring that the text is properly aligned within the image.
  drawColoredPrompt(imgX, imgY, imgW, imgH);
}
//CENTERING text
// the imgX, imgY, imgW, and imgH parameters are used to calculate the position and size of the prompt area, ensuring that the text is properly aligned within the image.
function drawColoredPrompt(imgX, imgY, imgW, imgH) {
  //i guessed a bit on these multipliers to get the text in the right place... By multiplying the imgX and imgW by specific values, the code determines the horizontal positions (leftX and rightX) for the text within the prompt image. This allows for proper alignment and spacing of the text within the designated area of the image.
  let leftX = imgX + imgW * 0.15; // deterimines horizontal position
  let rightX = imgX + imgW * 0.5; // determines font size and max width of text
  let maxWidth = rightX - leftX;

  //by multiplying the imgY and imgH by specific values, the code determines the vertical positions (y1, y2, y3, y4) for each line of text within the prompt image. This ensures that the text is evenly spaced and properly aligned within the designated area of the image.
  let y1 = imgY + imgH * 0.22;
  let y2 = imgY + imgH * 0.33;
  let y3 = imgY + imgH * 0.44;
  let y4 = imgY + imgH * 0.5;
  //ASSIGNING COLORS
  drawPromptLine(
    [
      { text: "Edit ", color: "#4D3447", bg: null },
      { text: fields[0].value || "___", color: "#B24155", bg: "#F7F2CF" },
    ],
    leftX,
    y1,
    maxWidth,
  );

  drawPromptLine(
    [
      { text: "from ", color: "#4D3447", bg: null },
      { text: fields[1].value || "___", color: "#6D6B45", bg: "#FFEFD6" },
    ],
    leftX,
    y2,
    maxWidth,
  );

  drawPromptLine(
    [
      { text: "in a ", color: "#4D3447", bg: null },
      { text: fields[2].value || "___", color: "#F3C9E2", bg: "#FDFAFA" },
      { text: " style", color: "#4D3447", bg: null },
    ],
    leftX,
    y3,
    maxWidth,
  );

  drawPromptLine(
    [
      { text: "using ", color: "#4D3447", bg: null },
      { text: fields[3].value || "___", color: "#CC448A", bg: "#FFEFD6" },
    ],
    leftX,
    y4,
    maxWidth,
  );
}
//ADDING PADDING
function drawPromptLine(segments, startX, y, maxWidth) {
  let padding = 4;
  let gap = 4;
  let boxHeight = 26;

  textSize(24);
  let widths = segments.map((s) => textWidth(s.text) + padding * 2);
  let totalWidth =
    widths.reduce((a, b) => a + b, 0) + gap * (segments.length - 1);

  let size = 24;
  while (totalWidth > maxWidth && size > 10) {
    size--;
    textSize(size);
    widths = segments.map((s) => textWidth(s.text) + padding * 2);
    totalWidth =
      widths.reduce((a, b) => a + b, 0) + gap * (segments.length - 1);
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

// CHARACTER button (Auto-updates show)
function assignCharacterShow() {
  let allShows = Object.keys(words.charactersByShow);
  let chosenShow = random(allShows);

  let list = words.charactersByShow[chosenShow];
  let chosenCharacter = random(list);

  fields[0].value = chosenCharacter;
  fields[1].value = chosenShow;
}

// Style button (auto-updates character)
function assignStyle() {
  let newWord = random(words.style);
  while (newWord === fields[2].value) newWord = random(words.style);
  fields[2].value = newWord;
}

//PROGRAM button
function assignProgram() {
  let newWord = random(words.program);
  while (newWord === fields[3].value) newWord = random(words.program);
  fields[3].value = newWord;
}

//ALL button
function generateAll() {
  assignCharacterShow();
  assignStyle();
  assignProgram();
}

//CLICKING making it work
// function mousePressed() {
//   // MENU CLICKS
//   if (mouseX > width - 200 && mouseX < width) {
//     if (mouseY > 40 && mouseY < 80)
//       window.location.href = "index.html";
//     if (mouseY > 90 && mouseY < 130)
//       window.location.href = "2index.html";
//     if (mouseY > 140 && mouseY < 180)
//       window.location.href = "3index.html";
//   }

//   // STAR button CLICKS
//   for (let s of stars) {
//     let d = dist(mouseX, mouseY, s.x, s.y);

//     if (d < s.r) {
//       if (s.field === "characterShow") assignCharacterShow();
//       else if (s.field === "style") assignStyle();
//       else if (s.field === "program") assignProgram();
//       else if (s.field === "all") generateAll();
//     }
//   }
// }

// I had to keep checking your mousepressed and the location of the stars, so I added some console logs to make it easier to debug and see what's going on when you click. This way, you can see exactly where you're clicking and the current positions of the stars, which should help you identify any issues with the click detection logic. This is sourced from Calude Code.
function mousePressed() {
  console.log("clicked at:", mouseX, mouseY);
  console.log(
    "stars:",
    stars.map((s) => `${s.field}: (${Math.round(s.x)}, ${Math.round(s.y)})`),
  );

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
