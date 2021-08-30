function setup() {
    createCanvas(800, 600)
}

function draw () {
   
    background(204);

   
    rect(0, 125, 800, 25);
    rect(0, 450, 800, 25);

    ellipse(350, 300, 25, 25);
    ellipse(450, 300, 25, 25);
    ellipse(550, 300, 25, 25);
    ellipse(650, 300, 25, 25);
    ellipse(750, 300, 25, 25);
   
    arc(mouseX, 300, 200, 200, 0.47, 5.65);

   
}