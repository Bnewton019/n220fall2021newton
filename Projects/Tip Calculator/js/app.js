let tipCalc = document.getElementById("tipCalc");

function tip() {
    let tipPercent = tipCalc.value *0.18;
    let billTotal = tipPercent + parseInt(tipCalc.value);
    console.log("Tip: $" + tipPercent);
    console.log("Total: $" + billTotal);
}