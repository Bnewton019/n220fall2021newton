

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(100);

    noFill();

    //For loop syntax
    for( var i = 0; i < 20; i++) {
       
        circle(300, 300, i * 30);

        
        triangle(10, 450, 10, 590, 200, 590);
        triangle(590, 450, 590, 590, 400, 590);
        triangle(10, 150, 10, 10, 200, 10);
        triangle(590, 150, 590, 10, 400, 10);
    
        
    
    
}
    console.log("Afterwards: " + i);
}