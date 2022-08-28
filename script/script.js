
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

let displayValue = 0;
let selectedOperator = "";
let firstOperand = 0;
let secondOperand = 0;

let display = document.querySelector("#display-input");

const mainButtons = document.querySelector(".numbers");
for (let i = 0; i <= 9; i++) {
    let buttons = document.createElement("button")
    buttons.textContent = i;
    buttons.classList.add("btn", "btn-number");
    buttons.style.minHeight = "50px"
    buttons.style.minWidth = "50px"

    buttons.addEventListener("click", () => {
        display.value = display.value + i;
        displayValue = display.value;
    });
    mainButtons.appendChild(buttons);
}

let clearButton = document.createElement("button");
clearButton.textContent = "C";
clearButton.classList.add("btn", "btn-clear");
clearButton.style.minHeight = "50px";
clearButton.style.minWidth = "50px";

mainButtons.appendChild(clearButton);

let deleteButton = document.createElement("button");
deleteButton.textContent = "Del"
deleteButton.classList.add("btn", "btn-delete");
deleteButton.style.minHeight = "50px"
deleteButton.style.minWidth = "50px"
mainButtons.appendChild(deleteButton);

let operations = new Array("+", "-", "x", "/");
const operatorButtons = document.querySelector(".operator-buttons");
operations.forEach(operation => {
    let button = document.createElement("button");
    button.textContent = operation
    button.classList.add("btn", "btn-operator");
    button.style.minHeight = "45px"
    button.style.minWidth = "45px"
    operatorButtons.appendChild(button)
});

const operationButtons = Array.from(document.querySelectorAll(".btn-operator"));
const history = document.querySelector(".history");
operationButtons.forEach(button => {
    button.addEventListener("click", operator => {
        history.innerHTML = history.innerHTML + display.value;
        display.value = "";
        if(operator.target.innerHTML == "+"){
            selectedOperator = add
            history.innerHTML = history.innerHTML + " + ";
        }
        else if(operator.target.innerHTML == "-") { 
            selectedOperator = subtract
            history.innerHTML = history.innerHTML + " - ";
        }
        else if(operator.target.innerHTML == "x") {
            selectedOperator = multiply
            history.innerHTML = history.innerHTML + " x ";
        }
        else if(operator.target.innerHTML == "/") {
            selectedOperator = divide
            history.innerHTML = history.innerHTML + " / ";
        }
    });
});

let equalButton = document.createElement("button");
equalButton.textContent = "="
equalButton.classList.add("btn", "btn-equal");
equalButton.addEventListener("click", () => {
    secondOperand = display.value;
    history.innerHTML = history.innerHTML + secondOperand + " = "
    let result = operate(selectedOperator, firstOperand, secondOperand);
    history.innerHTML = history.innerHTML + result + "<br/>"
});
operatorButtons.appendChild(equalButton);