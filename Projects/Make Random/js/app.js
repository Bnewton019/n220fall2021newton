let randomNumber = document.getElementById("randNumber");

getNumber();

function getNumber(max) {
    return Math.floor(Math.random() * max);
}



function displayNumber() {
    document.write(getNumber(10));
}
