let string = `
Hello! Welcome to the video editing prompt generator.`;
let currentCharacter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('lightyellow');


  for (var x = 25; x < mouseX-25; x += 35) {
    for (var y = 25; y < mouseY-25; y += 35) {
      
      fill ('lightblue'); 
      noStroke(); 
      ellipse(x, y, 25, 25);
      console.log(x); 
    }
//Orange Hello
  fill('orange'); 
  textSize(55);
  textFont("Starbim"); 
  text("Hello!!", width/3, height/2);
  
  //Red Hello
  fill('red'); 
  textSize(25);
  textFont("Dareo"); 
  text("Hello!!", width/5, height/3);
  
   //Purple Hello
  fill('purple'); 
  textSize(35);
  textFont("Outline Style");
  text("Hello!!", width/2, height/1.5);
}
}