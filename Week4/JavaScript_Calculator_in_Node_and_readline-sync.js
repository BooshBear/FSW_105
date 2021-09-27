const readline = require("readline-sync");

let firstNum = readline.questionInt("Please enter your first number: ");
let secondNum = readline.questionInt("Please enter your second number: ");
let enteredOperation = readline.question("Please enter the operation to perform (add, sub, mul, div): ");
    // math functions
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function jsCalculator(number1, number2, operation) {
    switch (operation) {
        case "add":
        sum = add(number1, number2);
        console.log("Your operation has ended with the result of " + sum);
            break;
        case "sub":
        sum = sub(number1, number2);
        console.log("Your operation has ended with the result of " + sum);
            break;
        case "mul":
        sum = mul(number1, number2);
        console.log("Your operation has ended with the result of " + sum);
            break;
        case "div":
        sum = div(number1, number2);
        console.log("Your operation has ended with the result of " + sum);
            break;
        default:
        console.log("Please select the right operation. (add, sub, mul, div)");
            break;
    }
}
jsCalculator(firstNum, secondNum, enteredOperation);