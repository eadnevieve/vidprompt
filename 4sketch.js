function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#FFEFD6");
  fill("#4D3447");
  let btn = createButton("Resources");
  btn.position(50, 50);
  btn.mousePressed(() => {
    window.location.href = "/my-page.html";
  });
  link = createA("index.html", '<img src="img/apple_6.png" alt="apple">');
  link.position(width / 2.25, height / 2.25);

  link.mouseOver(() => {
    link.style("transform", "scale(1.2)");
  });
  link.mouseOut(() => {
    link.style("transform", "scale(1)");
  });
}

function draw() {
  // Your other p5.js code
}
