const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a == 0 || b == 0 ? "I can't divide by zero my guy :)" : a / b;

const operate = (operator, a, b) => operator(a, b);

let displayValue = 0;
let lastResult = NaN;
let selectedOperators = new Array();
let allOperands = new Array();

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
clearButton.addEventListener("click", () => {
    display.value = "";
    displayValue = 0;
    selectedOperators = new Array();
    allOperands = new Array();
    history.innerHTML = "";
});

mainButtons.appendChild(clearButton);

let deleteButton = document.createElement("button");
deleteButton.textContent = "Del"
deleteButton.classList.add("btn", "btn-delete");
deleteButton.style.minHeight = "50px"
deleteButton.style.minWidth = "50px"
deleteButton.addEventListener("click", () => {
    let value = displayValue.toString();
    value = value.split("");
    value.pop()
    display.value = value.join("");
    displayValue = display.value;
});
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
        if (display.value == ""){
            allOperands.push(0);
            history.innerHTML = history.innerHTML + 0;
        }
        else{
            history.innerHTML = history.innerHTML + display.value;
            allOperands.push(Number(display.value));
        }
        

        if (allOperands.length > 1){
            if (isNaN(lastResult)){
                let result = operate(selectedOperators[selectedOperators.length-1], allOperands[allOperands.length-1], allOperands[allOperands.length-2])
                lastResult = result;
                history.innerHTML = history.innerHTML + " = " + result + "<br/>" + result;
            }
            else{
                let result = operate(selectedOperators[selectedOperators.length-1], lastResult, allOperands[allOperands.length-1])
                lastResult = result;
                history.innerHTML = history.innerHTML + " = " + result + "<br/>" + result;
            }
        }
        
        if(operator.target.innerHTML == "+"){
            selectedOperators.push(add);
            history.innerHTML = history.innerHTML + " + ";
        }
        else if(operator.target.innerHTML == "-") { 
            selectedOperators.push(subtract);
            history.innerHTML = history.innerHTML + " - ";
        }
        else if(operator.target.innerHTML == "x") {
            selectedOperators.push(multiply);
            history.innerHTML = history.innerHTML + " x ";
        }
        else if(operator.target.innerHTML == "/") {
            selectedOperators.push(divide);
            history.innerHTML = history.innerHTML + " / ";
        }

        display.value = "";
    });
});

let equalButton = document.createElement("button");
equalButton.textContent = "=";
equalButton.classList.add("btn", "btn-equal");
equalButton.addEventListener("click", () => {
    allOperands.push(Number(display.value));
    history.innerHTML = history.innerHTML + allOperands[allOperands.length-1] + " = "

    for (let i = 0; i < allOperands.length; i++){
        result = operate(selectedOperators[selectedOperators.length-1], lastResult, Number(allOperands[allOperands.length-1]));
    }
    history.innerHTML = history.innerHTML + result + "<br/>"
    display.value = "";
    displayValue = 0;
    selectedOperators = new Array();
    allOperands = new Array();
});
operatorButtons.appendChild(equalButton);