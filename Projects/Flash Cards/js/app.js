let elementOne = document.getElementById("flashOne");
let elementTwo = document.getElementById("flashTwo");
let elementThree = document.getElementById("flashThree");

elementOne.addEventListener("click", itsClicked);
elementTwo.addEventListener("click", itsClicked);
elementThree.addEventListener("click", itsClicked);

elementOne.style.height = "200px";
elementOne.style.width = "200px";
elementOne.style.float = "left";
elementOne.style.backgroundColor = "#999"
elementOne.style.margin = "5px";

elementTwo.style.height = "200px";
elementTwo.style.width = "200px";
elementTwo.style.float = "left";
elementTwo.style.backgroundColor = "#999"
elementTwo.style.margin = "5px";

elementThree.style.height = "200px";
elementThree.style.width = "200px";
elementThree.style.float = "left";
elementThree.style.backgroundColor = "#999"
elementThree.style.margin = "5px";

function itsClicked(event) {
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = response;
}