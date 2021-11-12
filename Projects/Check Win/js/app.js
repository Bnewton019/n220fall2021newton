let txtWinner = document.getElementById("txtWin");

function checkWinner() {
    let numbers = txtWinner.value; 
    console.log(numbers);
    let splitNumbers = numbers.split(",");
    console.log(splitNumbers);
    console.log(numbers.includes("1, 1, 1"));
    if (numbers.includes("1, 1, 1")) {
        return alert("Winner")
    }
    else {
        return alert("Not Winner")
    }
}