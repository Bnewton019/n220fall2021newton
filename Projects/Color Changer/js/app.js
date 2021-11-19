let element = document.getElementById("squareOne");
let elementTwo = document.getElementById("squareTwo");
let elementThree = document.getElementById("squareThree");

element.addEventListener("click", itsClicked);
elementTwo.addEventListener("click", itsClicked);
elementThree.addEventListener("click", itsClicked);


element.style.backgroundColor = "#585c63";
element.style.height = "200px";
element.style.width = "200px";
element.style.margin = "5px";
element.style.float = "left";

elementTwo.style.backgroundColor = "#585c63";
elementTwo.style.height = "200px";
elementTwo.style.width = "200px";
elementTwo.style.margin = "5px";
elementTwo.style.float = "left";

elementThree.style.backgroundColor = "#585c63";
elementThree.style.height = "200px";
elementThree.style.width = "200px";
elementThree.style.margin = "5px";
elementThree.style.float = "left";

function itsClicked(event) {
    console.log(event.target);
   let response = event.target.getAttribute("data-response");
   event.target.style.backgroundColor = response;
}
