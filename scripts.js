const display = document.getElementById("input-box");
const buttons = document.querySelectorAll(".buttons");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals");

let savedDisplay = '';
let num1 = '';
let num2 = '';
let operand = '';
let result = '';


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
    num2 = '';
    result = '';
    operand = '';
    display.value = '';
}

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (operand != ''){
            display.value = '';
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
    });
});

equals.addEventListener("click", () => {
    // in case the user presses equals before input
    if (num1 == '' || savedDisplay == ''){
        return;
    }
    result == '' ? result = operate(num1, savedDisplay, operand) : result = operate(result, savedDisplay, operand);      
    display.value = result;
});