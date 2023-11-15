function setup() {
    createCanvas(600, 450);
    background(150, 200,220);
    strokeWeight(10);
    
  }
  
  function draw() {
    stroke(2);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }