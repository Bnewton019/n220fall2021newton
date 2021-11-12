let inputNumber = document.getElementById("number");

isDividedBy(parseInt(inputNumber), 7);

function isDividedBy(number, a) {
     return (number % a === 0);
    

    
}

function updateInfo() {
    document.write(isDividedBy(parseInt(inputNumber) , 7));
}

console.log(isDividedBy(7, 7));