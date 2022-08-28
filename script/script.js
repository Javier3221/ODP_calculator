
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

const numberButtons = document.querySelector(".numbers");
for (let i = 0; i <= 9; i++) {
    let buttons = document.createElement("button")
    buttons.textContent = i;
    buttons.classList.add("btn", "btn-number");
    buttons.style.minHeight = "50px"
    buttons.style.minWidth = "50px"
    numberButtons.appendChild(buttons);
} 

let clearButton = document.createElement("button");
clearButton.textContent = "C";
clearButton.classList.add("btn", "btn-clear");
clearButton.style.minHeight = "50px";
clearButton.style.minWidth = "50px";
numberButtons.appendChild(clearButton);

let deleteButton = document.createElement("button");
deleteButton.textContent = "Del"
deleteButton.classList.add("btn", "btn-delete");
deleteButton.style.minHeight = "50px"
deleteButton.style.minWidth = "50px"
numberButtons.appendChild(deleteButton);

let operations = new Array("+", "-", "x", "/");
const operatorButtons = document.querySelector(".operators");
operations.forEach(operation => {
    let button = document.createElement("button");
    button.textContent = operation
    button.classList.add("btn", "btn-operator");
    button.style.minHeight = "45px"
    button.style.minWidth = "45px"
    operatorButtons.appendChild(button)
});