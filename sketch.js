function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    
  stroke("green");
  fill("purple");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 35, 20);
    }
  }
  