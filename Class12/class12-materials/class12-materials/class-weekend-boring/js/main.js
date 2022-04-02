document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day === "Tuesday" || day === "Thursday") {
    alert('CLASS DAY!');
  } else if(day === "Saturay" || day ==="Sunday"){
    alert('WEEKEND DAY')
  } else {
    alert('BORING DAY')
  }
}
