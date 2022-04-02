//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function twentyOneSavage() {
    for(let i = 0; i < 21; i++){
        document.querySelector('#savageSays').innerText += " 21";
    }
}

twentyOneSavage();
//Bonus can you make it print '21' 21 times to the dom?
document.querySelector('#savageSays').innerText += "21";