// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const str = 'Is this the best week ever';
alert(str.endsWith('?'));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let strToChange = 'I am looking for jr. dev positions.';
console.log(strToChange.replaceAll('jr. dev', 'software engineering'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    return gameChoices[Math.floor(Math.random() * 3)];
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function computerGame(playerInput) {
    let botChoice = rockPaperScissors()
    if (playerInput === botChoice) {
        alert('Its a tie!')
    }
    else if ( (playerInput === 'rock' && botChoice === 'scissors') || (playerInput === 'scissors' && botChoice === 'paper') || (playerInput === 'paper' && botChoice === 'rock') ) {
        alert('You have won the game!')
    }
    else {
        alert('You have lost the game!')
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
