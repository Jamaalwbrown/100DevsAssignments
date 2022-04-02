//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numberArr = [5, 2, 34, 77, 10, 23, 45];
alert(numberArr.reduce((previous, current) => previous + current, 0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squarer(numArr) {
    let resultArr = numArr.map((element) => Math.pow(element, 2));
    alert(resultArr);
}

//Create a function that takes string
//Print the reverse of that string to the console
let unoReverse = str => console.log(str.split('').reverse().join(''));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromeCheck = str => alert( str === str.split('').reverse().join(''));

palindromeCheck('racecar');