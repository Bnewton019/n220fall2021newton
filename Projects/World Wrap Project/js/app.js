let xPos = 0;

function setup() {
    createCanvas(800,600);
}

function draw() {
    xPos = xPos + 5;
    circle(xPos, 350, 100);
    if (xPos > 799) {
        xPos = 1
    }
    
}