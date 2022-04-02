//Create a conditonal that checks their age

let age = document.querySelector('#danceDanceRevolution').value;
age = Number(age);
//If under 16, tell them they can not drive
if(age < 16) {
    alert('You can not drive');
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
if(age < 18) {
    alert("You can't hate from outside the club. because you can't even get in");
}
//If under 21, tell them they can not drink
if(age < 21) {
    alert("You can't not drink");
}
//If under 25, tell them they can not rent cars affordably
if(age < 25) {
    alert("You can not rent cars affordably");
}
//If under 30, tell them they can not rent fancy cars affordably

if(age < 30) {
    alert("You can not rent fancy cars affordably");
}
//If under over 30, tell them there is nothing left to look forward too
if(age > 30) {
    alert("There is nothing left to look forward");
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
let h1Holder = document.querySelector('h1');

h1Holder.addEventListener('click', logFunction);
