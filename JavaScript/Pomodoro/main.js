let timerSelection = 'Work';
let startingMinutes = 25;
let startingSeconds = 0;
let timerRunning;
let stopTimer;
let playing = false;
let countdownReset = null;
let playagain = false;
let state = 1;
let counter = 0;
let speed = 1000;
let audio = new Audio('sounds/longerSound.mp3');
let theme = 1;
let themeColor = '#10cb83';
let startingMinutesWork = document.getElementById("workInput").value;
let startingMinutesShortBreak = document.getElementById("shortBreakInput").value;
let startingMinutesLongBreak = document.getElementById("longBreakInput").value;




setInterval(update, 1);
function update() {

	if (state == 1) {
		document.getElementById("work").style.backgroundColor = 'rgba(31, 31, 31, 0.527)';
		document.getElementById("short_break").style.backgroundColor = 'transparent';
		document.getElementById("long_break").style.backgroundColor = 'transparent';
		document.getElementById("work").style.color = themeColor;
		document.getElementById("minutes").style.color = themeColor;
		document.getElementById("doppelpunkt").style.color = themeColor;
		document.getElementById("seconds").style.color = themeColor;
		document.getElementById("short_break").style.color = '#cccccc';
		document.getElementById("long_break").style.color = '#cccccc';
	} else if (state == 2) {
		document.getElementById("short_break").style.backgroundColor = 'rgba(31, 31, 31, 0.527)';
		document.getElementById("work").style.backgroundColor = 'transparent';
		document.getElementById("long_break").style.backgroundColor = 'transparent';
		document.getElementById("short_break").style.color = themeColor;
		document.getElementById("minutes").style.color = themeColor;
		document.getElementById("doppelpunkt").style.color = themeColor;
		document.getElementById("seconds").style.color = themeColor;
		document.getElementById("work").style.color = '#cccccc';
		document.getElementById("long_break").style.color = '#cccccc';
	} else if (state == 3) {
		document.getElementById("long_break").style.backgroundColor = 'rgba(31, 31, 31, 0.527)';
		document.getElementById("short_break").style.backgroundColor = 'transparent';
		document.getElementById("work").style.backgroundColor = 'transparent';
		document.getElementById("long_break").style.color = themeColor;
		document.getElementById("minutes").style.color = themeColor;
		document.getElementById("doppelpunkt").style.color = themeColor;
		document.getElementById("seconds").style.color = themeColor;
		document.getElementById("short_break").style.color = '#cccccc';
		document.getElementById("work").style.color = '#cccccc';
	}
}

//play-button turns into pause button, when it's clicked
function playVisibility() {
	startingMinutesWork = document.getElementById("workInput").value;
	startingMinutesShortBreak = document.getElementById("shortBreakInput").value;
	startingMinutesLongBreak = document.getElementById("longBreakInput").value;
	if (startingMinutesWork < 10) {
		startingMinutesWork = '0' + startingMinutesWork;
	}
	if (startingMinutesShortBreak < 10) {
		startingMinutesShortBreak = '0' + startingMinutesShortBreak;
	}
	if (startingMinutesLongBreak < 10) {
		startingMinutesLongBreak = '0' + startingMinutesLongBreak;
	}
	document.getElementById("playButton").style.visibility = "visible";
	document.getElementById("reload").style.visibility = "hidden";
	if (state == 1) {
		document.querySelector("#minutes").innerHTML = startingMinutesWork;
		document.querySelector("#seconds").innerHTML = '00';
	} else if (state == 2) {
		document.querySelector("#minutes").innerHTML = startingMinutesShortBreak;
		document.querySelector("#seconds").innerHTML = '00';
	} else if (state == 3) {
		document.querySelector("#minutes").innerHTML = startingMinutesLongBreak;
		document.querySelector("#seconds").innerHTML = '00';
	}
}



//sets the correct timer duration
function setWork() {
	if (playing == false) {
		startingMinutes = document.getElementById("workInput").value;
		(startingMinutes < 10)? document.querySelector("#minutes").innerHTML = '0' + startingMinutes  :  document.querySelector("#minutes").innerHTML = startingMinutes;
		document.querySelector("#seconds").innerHTML = '00';
		document.querySelector("#title").innerHTML = startingMinutes + ' : ' + '00';
	} else {
		return;
	}
}


function setShortBreak() {
	if (playing == false) {
		startingMinutes = document.getElementById("shortBreakInput").value;
		(startingMinutes < 10)? document.querySelector("#minutes").innerHTML = '0' + startingMinutes  :  document.querySelector("#minutes").innerHTML = startingMinutes;
		document.querySelector("#seconds").innerHTML = '00';
		document.querySelector("#title").innerHTML = startingMinutes + ' : ' + '00';
	} else {
		return;
	}
}


function setLongBreak() {
	if (playing == false) {
		startingMinutes = document.getElementById("longBreakInput").value;
		(startingMinutes < 10)? document.querySelector("#minutes").innerHTML = '0' + startingMinutes  :  document.querySelector("#minutes").innerHTML = startingMinutes;
		document.querySelector("#seconds").innerHTML = '00';
		document.querySelector("#title").innerHTML = startingMinutes + ' : ' + '00';
	} else {
		return;
	}
}


function timer() {
	if (state == 1) {
		work();
	}
	if (state == 2) {
		shortBreak();
	}
	if (state == 3) {
		longBreak();
	}
}


function work() {
	startingMinutes = document.getElementById("workInput").value;
	document.getElementById("playButton").style.visibility = "hidden";
	document.getElementById("reload").style.visibility = "visible";

	playing = true;
	let time = startingMinutes * 60;

	countdownReset = setInterval(updateCoundtdown, speed);

	time--;


	function updateCoundtdown() {
		if (playing) {
			let minutes = Math.floor(time / 60);
			let seconds = time % 60;

			seconds = seconds < 10 ? '0' + seconds : seconds;
			minutes = minutes < 10 ? '0' + minutes : minutes;

			document.querySelector("#minutes").innerHTML = minutes;
			document.querySelector("#seconds").innerHTML = seconds;
			document.querySelector("#title").innerHTML = minutes.toString() + ' : ' + seconds.toString();
			time--;
			console.log(minutes + ':' + seconds);
			if (document.querySelector("#minutes").innerHTML == '00' && document.querySelector("#seconds").innerHTML == '00') {
				if (counter <= 5) {
					state = 2;
					console.log(counter);
					clearInterval(countdownReset);
					shortBreak();
					counter += 1;
					audio.play();
				}
				if (counter == 6) {
					state = 3;
					console.log(counter);
					clearInterval(countdownReset);
					longBreak();
					counter = 0;
					audio.play();
				}
			}
		} else {
			clearInterval(countdownReset);
		}
	}
}




function shortBreak() {
	startingMinutes = startingMinutesShortBreak;

	document.getElementById("playButton").style.visibility = "hidden";
	document.getElementById("reload").style.visibility = "visible";

	playing = true;
	let time = startingMinutes * 60;

	countdownReset = setInterval(updateCoundtdown, speed);

	time--;

	function updateCoundtdown() {
		if (playing) {
			let minutes = Math.floor(time / 60);
			let seconds = time % 60;

			seconds = seconds < 10 ? '0' + seconds : seconds;
			minutes = minutes < 10 ? '0' + minutes : minutes;

			document.querySelector("#minutes").innerHTML = minutes;
			document.querySelector("#seconds").innerHTML = seconds;
			document.querySelector("#title").innerHTML = minutes.toString() + ' : ' + seconds.toString();
			time--;
			console.log(minutes + ':' + seconds);
			if (document.querySelector("#minutes").innerHTML == '00' && document.querySelector("#seconds").innerHTML == '00') {
				state = 1;
				console.log(counter);
				clearInterval(countdownReset);
				work();
				counter += 1;
				audio.play();
			}
		} else {
			clearInterval(countdownReset);
		}
	}
}


function longBreak() {
	startingMinutes = startingMinutesLongBreak;

	document.getElementById("playButton").style.visibility = "hidden";
	document.getElementById("reload").style.visibility = "visible";

	playing = true;
	let time = startingMinutes * 60;

	countdownReset = setInterval(updateCoundtdown, speed);

	time--;

	function updateCoundtdown() {
		if (playing) {
			let minutes = Math.floor(time / 60);
			let seconds = time % 60;

			seconds = seconds < 10 ? '0' + seconds : seconds;
			minutes = minutes < 10 ? '0' + minutes : minutes;

			document.querySelector("#minutes").innerHTML = minutes;
			document.querySelector("#seconds").innerHTML = seconds;
			document.querySelector("#title").innerHTML = minutes.toString() + ' : ' + seconds.toString();
			time--;
			console.log(minutes + ':' + seconds);
			if (document.querySelector("#minutes").innerHTML == '00' && document.querySelector("#seconds").innerHTML == '00') {
				state = 1;
				console.log(counter);
				clearInterval(countdownReset);
				work();
				counter = 0;
				audio.play();
			}
		} else {
			clearInterval(countdownReset);
		}
	}
}



function showThemes() {
	var x = document.getElementById("themes");
	if (x.style.visibility == "visible") {
		document.getElementById("dropDownButton").style.backgroundColor = 'transparent';
	  	x.style.visibility = "hidden";
	} else {
		document.getElementById("dropDownButton").style.backgroundColor = 'rgba(31, 31, 31, 0.527)';
	  	x.style.visibility = "visible";
	}
}

function showSettings() {
	var x = document.getElementById("settingsDropdown");
	if (x.style.visibility == "visible") {
		document.getElementById("settingsButton").style.backgroundColor = 'transparent';
	  	x.style.visibility = "hidden";
	} else {
		document.getElementById("settingsButton").style.backgroundColor = 'rgba(31, 31, 31, 0.527)';
	  	x.style.visibility = "visible";
	}
}


function Input() {
	if (playing == false) {
		playVisibility();
	} else {
		return;
	}
}