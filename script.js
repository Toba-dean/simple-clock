// reference to the DOM
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#mins");
let seconds = document.querySelector("#secs");
let ampm = document.querySelector(".ampm");

setInterval(() => {
	// creating the date objects
	let hrs = new Date().getHours();
	let mins = new Date().getMinutes();
	let secs = new Date().getSeconds();
	let am = hrs >= 12 ? "PM" : "AM";

	// converting 24hrs to 12hrs clock
	if (hrs > 12) hrs -= 12;

	// adding 0 to single digits
	hrs = hrs < 10 ? `0${hrs}` : hrs;
	mins = mins < 10 ? `0${mins}` : mins;
	secs = secs < 10 ? `0${secs}` : secs;

	// setting the text of the referenced Dom
	hours.innerHTML = hrs;
	minutes.innerHTML = mins;
	seconds.innerHTML = secs;
	ampm.innerHTML = am;
}, 1000);
