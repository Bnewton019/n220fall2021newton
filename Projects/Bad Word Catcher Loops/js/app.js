let txtInput = document.getElementById("txtExample");

function breakString() {
    let sentence = txtInput.value;
    
console.log(sentence);

    let splitSentence = sentence.split(" ");
    console.log(splitSentence);

    console.log(sentence.includes("clear", "water", "tires"));

    if (sentence.includes("clear", "water", "tires")) {
        return alert("Bad Words Detected!")
    }

    
}

function clearData() {
    document.getElementById("txtExample").value = "";
}