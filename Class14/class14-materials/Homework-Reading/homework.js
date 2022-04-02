
/****** For the carousel problem on the reading homework ******/
/****** For Loop implementation *****/


let userInput = prompt('How many spins on the carousel do you want?', 'Example: 10')
for(let i = 1; i <= userInput; i++) {
    console.log(`The carousel is on turn number ${i}`);
}


//While loop implementation

let userInput = prompt('How many spins on the carousel do you want?', 'Example: 10')
let j = 1;
while(j <= userInput) {
    console.log(`The carousel is on turn number ${j}`);
    j++;
}

/********* Parity Bit  ********/
/********* For loop implementation  ********/
let userInput = prompt('Enter a number between 1 and 9 to begin', '1')
for (let i = userInput; i <= 10; i++) {
    if (i % 2 === 0) {              //Test for evenness
      console.log(`${i} is even`);
    }
    if (i % 2 !== 0) {              //Test for oddness
        console.log(`${i} is odd`);
      }
  }

/********* While loop implementation  ********/  
let userInput = prompt('Enter a number between 1 and 9 to begin', '1')
while(i <= 10) {
    if (i % 2 === 0) {              //Test for evenness
        console.log(`${i} is even`);
      }
    if (i % 2 !== 0) {              //Test for oddness
        console.log(`${i} is odd`);
      }
      i++;
}

/********* Input Validation ********/
// while loop implementation

let inputFlag = 0;
while(inputFlag === 0) {
    let userInput = prompt('Please enter a number that is less than or equal to 100')
    if (userInput > 50 && userInput < 100) {
        inputFlag = 1;
    }
    else {
        inputFlag = 0;
    }
}

// For loop implementation
for(let i = 0; i <= 100; i++) {
    let userInput = prompt('Please enter a number that is less than or equal to 100')
    if (userInput > 50 && userInput < 100) {
        i = 100;         //If valid input set i to 100 to exit loop
    }
    else {
        i = 0;          //Keep reseting the i variable to 0 until correct input is received
    }
}

/********* Multiplication Table ********/

/********* For Loop Implementation ********/
    let inputNum;
    let multiplicationTable = [];       //create empty array to hold results
    for(let j = 0; j < 2; j++) {

        inputNum = prompt("Please enter a number");
        if (inputNum > 2 && inputNum < 9) {
            j = 1;
            for(let i = 1; i <= inputNum; i++) {
                multiplicationTable.push(inputNum * i);
        }
    }
    else {
        j = 0;
    }
    }
    console.log(multiplicationTable);


 /********* While Loop Implementation ********/
    let inputNum;
    let multiplicationTable = [];       //create empty array to hold results
    let j = 0;
    while(j < 1) {

        inputNum = prompt("Please enter a number");
        if (inputNum > 2 && inputNum < 9) {
            j = 1;
            let i = 1;
            while(i <= inputNum) {
                multiplicationTable.push(inputNum * i);
                i++;
            }
        }
        else { j = 0; }
    }
    console.log(multiplicationTable);

/********* Neither yes nor no ********/
/********* For loop implementation ********/
for(let i = 0; i <= 50; i++) {
    let userInput = prompt("Give a yes or no answer to the question. Is your day going well today?");
    if (userInput === "yes" || userInput === "no") {
        alert("You entered the correct answer")
        i = 51;
    }

    else {
        alert("Please enter the correct answer")
        i = 0;
    }
}

/********* While loop implementation ********/
let i = 0;
while(i !== 1) {
    let userInput = prompt("Give a yes or no answer to the question. Is your day going well today?");
    if (userInput === "yes" || userInput === "no") {
        alert("You entered the correct answer");
        i = 1;
    }

    else {
        alert("Please enter the correct answer");
        i = 0;
    }
}

/********* FizzBuzz ********/
/********* For loop implementation  ********/
for(let i = 0; i <= 100; i++) {
    if(((i % 3) === 0) && ((i % 5) !== 0)) {
        console.log("Fizz")
    }
    
    else if(((i % 3) !== 0) && ((i % 5) === 0)) {
        console.log("Buzz")
    }
    
    else if(((i % 3) === 0) && ((i % 5) === 0)) {
        console.log("FizzBuzz")
    }

    else {
        console.log(i);
    }
}


/********* While loop implementation  ********/
let i = 0;
while(i <= 100) {
    if(((i % 3) === 0) && ((i % 5) !== 0)) {
        console.log("Fizz");
    }
    
    else if(((i % 3) !== 0) && ((i % 5) === 0)) {
        console.log("Buzz");
    }
    
    else if(((i % 3) === 0) && ((i % 5) === 0)) {
        console.log("FizzBuzz");
    }

    else {
        console.log(i);
    }

    i++;
}