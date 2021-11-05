let inputNumber = document.getElementById("number");



function isDividedBy(number, a) {
    if (number % a === 0) {
        return true;
    }
    
    return (number % a === 0);

    
}

function updateInfo() {
    document.write(isDividedBy(inputNumber, 7));
}