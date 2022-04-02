//Write your pseduo code first! 
//1. Grab the temperature from the user
//2. Convert the temperature to farhenheit using a converter
//3. Output the temperature to the user

document.querySelector('#convert').addEventListener('click', tempConverter);

function tempConverter() {

  const cTemp = document.querySelector('#temp').value

  const fTemp = (9/5) * cTemp + 32;

  alert(`The temperature entered in celsius was ${cTemp}. This temperature in fahrenheit is ${fTemp}`);
}