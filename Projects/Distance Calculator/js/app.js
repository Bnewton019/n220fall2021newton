let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");
let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");

function calcDist() {
    let xDiff = x1.value - x2.value;
    let yDiff = y1.value - y2.value;
    let distEquation = d = Math.sqrt( xDiff*xDiff + yDiff*yDiff);
    console.log(distEquation);
}