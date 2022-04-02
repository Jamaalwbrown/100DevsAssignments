//--- Easy
//create a variable and assign it a number
let inputVariable = 8;
//minus 10 from that number
inputVariable = inputVariable - 10;
//print that number to the console
console.log(inputVariable);

//--- Medium
//create a variable that holds a value from the input
let inputValue = document.querySelector('#danceDanceRevolution').value;

//add 25 to that number
inputValue = inputValue + 25;
//alert that number
alert(inputValue);

//--- Hard
//create a variable that holds the h1
let h1Holder = document.querySelector('h1');
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click', logFunction);

function logFunction() {
    let sum = inputVariable + Number(inputValue);
    console.log(sum);
}