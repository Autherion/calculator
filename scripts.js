const display = document.getElementById("input-box");
const btns = document.querySelectorAll(".btn");
let savedDisplay = 0;
display.value = 0;
let num1, num2, result = 0;


function operate(num1, num2, expression){
    switch (expression){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 == 0) alert("Can't divide by zero");
            else return num1 / num2;       
        default:
            console.log("F");
    }
}

function clearScreen() {
    savedDisplay = 0;
    num1 = 0;
    num2 = 0;
    result = 0;
    document.getElementById("input-box").value = 0;
}

btns.forEach(btn => {
    btn.addEventListener("click", function(event) {
        display.value = btn.value;
        savedDisplay = btn.value;
    });
});