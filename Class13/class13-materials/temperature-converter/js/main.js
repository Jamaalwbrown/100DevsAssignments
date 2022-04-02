//Write your pseduo code first! 
/*
Get your temperature in celsius
convert the celsius temperature to fahrenheit
write the fahrenheit temperature to the DOM
*/

document.querySelector('#check').addEventListener('click', celsiusToFahrenheit)

function celsiusToFahrenheit() {

    const ctemp = document.querySelector('#temp').value;

    const ftemp = (ctemp*9)/5 + 32;

    alert(`The temp in celsius was ${ctemp}. The fahrenheit temp is ${ftemp}`);
}

