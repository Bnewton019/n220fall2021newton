var diameter = 1

function setup() {
    createCanvas(800,600);
    
}

function draw() {
    circle(400, 300, diameter)
    diameter = diameter + 1;
}
