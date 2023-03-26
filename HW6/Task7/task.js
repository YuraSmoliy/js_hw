const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateClock() {
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
  let month = now.getMonth();
  let dayNumber = now.getDate();

  console.log(dayNumber);
  document.querySelector(".date").innerText = dayNumber + " " +months[month];
	document.querySelector(".digit1").innerText = Math.floor(hours / 10);
	document.querySelector(".digit2").innerText = hours % 10;
	document.querySelector(".digit3").innerText = Math.floor(minutes / 10);
	document.querySelector(".digit4").innerText = minutes % 10;
	document.querySelector(".digit5").innerText = Math.floor(seconds / 10);
	document.querySelector(".digit6").innerText = seconds % 10;
}

setInterval(updateClock, 1000);
