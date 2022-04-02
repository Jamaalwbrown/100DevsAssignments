// *Variables*
// Create a variable and console log the value

const displayValue = "Im a constant variable!"
console.log(dispalyValue);

// Create a variable, add 10 to it, and alert the value

let mathNumber = 0;
mathNumber = mathNumber + 10;
console.log(mathNumber);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNumbers(num1, num2, num3, num4) {
    let finalDifference = (num1 - num2 - num3 - num4);
    alert(`The subtraction result is: ${finalDifference}`);
}

subtractFourNumbers(500, 150, 50, 25);

// Create a function that divides one number by another and returns the remainder

function retrieveRemainder(dividend, divisor) {
    let remainder = (dividend % divisor);
    return remainder;
}

retrieveRemainder(12, 5);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji(number1, number2) {
    let sumResult = number1 + number2;
    if (sumResult > 50){
        alert("Jumanji")
    }
    else {
        alert("You did not win the prize");
    }
}

jumanji(25, 60);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebra(inputNum1, inputNum2, inputNum3) {
    let multiplyResult = (inputNum1 * inputNum2 * inputNum3);
    if (multiplyResult % 3 === 0) {
        alert("ZEBRA");
    }
    else {
        alert("no zebra");
    }
}

zebra(3, 6, 9);