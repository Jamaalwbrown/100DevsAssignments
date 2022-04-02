//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', snackGrab)
function snackGrab() {

    let snackNum = Number(document.querySelector('#snacker').value);
    document.querySelector('#stops').innerText = "";
    for (let i = 0; i < snackNum; i++) {
        document.querySelector('#stops').innerText += " stop";
    }
}