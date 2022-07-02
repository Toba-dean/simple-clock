// reference to the DOM
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#mins");
let seconds = document.querySelector("#secs");
let ampm = document.querySelector(".ampm");
let hrSvg = document.querySelector("#hr");
let minSvg = document.querySelector("#min");
let secSvg = document.querySelector("#sec");
let hrDot = document.querySelector(".hrs_dot");
let minDot = document.querySelector(".mins_dot");
let secDot = document.querySelector(".sec_dot");

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
	hours.innerHTML = `${hrs} <br> <span>Hour</span>`;
	minutes.innerHTML = `${mins} <br> <span>Minute</span>`;
	seconds.innerHTML = `${secs} <br> <span>Second</span>`;
	ampm.innerHTML = am;

  // dividing by 12 because im using a 12hr clock
  hrSvg.style.strokeDashoffset = 440 - (440 * hrs) / 12;

  // dividing by 60 cos of min and sec are 60
  minSvg.style.strokeDashoffset = 440 - (440 * mins) / 60;
  secSvg.style.strokeDashoffset = 440 - (440 * secs) / 60;

  // 360deg / 12 === 30
  hrDot.style.transform = `rotate(${hrs * 30}deg)`;

  // 360 / 60 = 6
  minDot.style.transform = `rotate(${mins * 6}deg)`;
  secDot.style.transform = `rotate(${secs * 6}deg)`;
}, 1000);
