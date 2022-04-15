const display = document.getElementById("input-box");
const buttons = document.querySelectorAll(".buttons");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals");
const deleteBtn = document.getElementById("delete");

let savedDisplay = '';
let num1 = '';
let operand = '';
let result = '';
let check = false;

function operate(num1, num2, expression){
    const firstNumber = parseFloat(num1);
    const secondNumber = parseFloat(num2);

    if (isNaN(firstNumber) || isNaN(secondNumber)) return;
    switch (expression){
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;  
        default:
            return;     
    }
}

function clearScreen() {
    savedDisplay = '';
    num1 = '';
    result = '';
    operand = '';
    display.value = '';
    check = false;
}

function deleteNumber() {
    if (savedDisplay.length > 0) {
        newValue = savedDisplay.slice(0, -1);
        savedDisplay = newValue;
        display.value = newValue;
    }
}


numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (operand != '' && check){
            display.value = '';
            savedDisplay = '';
            check = false;
        }
        display.value = display.value.toString() + number.value.toString();
        savedDisplay = display.value.toString();  
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        num1 = savedDisplay; 
        operand = operator.value;
        display.value = operand;
        check = true;
    });
});

equals.addEventListener("click", () => {
    // in case the user presses equals before input
    if (num1 === '' || savedDisplay === ''){
        return;
    }
    result === '' ? result = operate(num1, savedDisplay, operand) : result = operate(result, savedDisplay, operand);      
    display.value = result;
});