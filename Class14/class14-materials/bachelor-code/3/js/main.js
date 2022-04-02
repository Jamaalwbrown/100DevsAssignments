/*Grab each element from the DOM with class of contestant. Save them in an array and add click event listeners on each of the elements*/

const contestants = document.querySelectorAll('.contestant');

Array.from(contestants).forEach(element => element.addEventListener('click', finalRose));

//For each click event fired check if element clicked has a class of 'rose'. If 'true' then apply then toggle the hidden display style	
//If 'false' then alert the user that the wrong element was clicked																		

function finalRose(click) {

	if(click.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.toggle('hidden');
	}
	
	else {
		alert('Wrong!')	
	}
	
}