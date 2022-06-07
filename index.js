// Write your code here!
const main = document.getElementById("main");
main.remove();

const body = document.querySelector("body");
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Tony is the champion";
body.append(newHeader);