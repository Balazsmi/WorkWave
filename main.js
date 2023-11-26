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
let audio = new Audio('sounds/sound.mp3');
let theme = 1;
let startingMinutesWork = localStorage.getItem("workDuration");
let startingMinutesShortBreak = localStorage.getItem("shortBreakDuration");
let startingMinutesLongBreak = localStorage.getItem("longBreakDuration");


document.querySelector(':root').style.setProperty('--themeColor', localStorage.getItem("themeColorLocalStorage"));
retreiveDurations();
playVisibility();
setInterval(update, 1);

function update() {
	if (state == 1) {
		document.getElementById("work").style.color = 'var(--themeColor)';
		document.getElementById("minutes").style.color = 'var(--themeColor)';
		document.getElementById("doppelpunkt").style.color = 'var(--themeColor)';
		document.getElementById("seconds").style.color = 'var(--themeColor)';
		document.getElementById("short_break").style.color = 'var(--font)';
		document.getElementById("long_break").style.color = 'var(--font)';
		document.getElementById("work").style.fontSize = '23px';
		document.getElementById("short_break").style.fontSize = '20px';
		document.getElementById("long_break").style.fontSize = '20px';
	} else if (state == 2) {
		document.getElementById("short_break").style.color = 'var(--themeColor)';
		document.getElementById("minutes").style.color = 'var(--themeColor)';
		document.getElementById("doppelpunkt").style.color = 'var(--themeColor)';
		document.getElementById("seconds").style.color = 'var(--themeColor)';
		document.getElementById("work").style.color = 'var(--font)';
		document.getElementById("long_break").style.color = 'var(--font)';
		document.getElementById("work").style.fontSize = '20px';
		document.getElementById("short_break").style.fontSize = '23px';
		document.getElementById("long_break").style.fontSize = '20px';
	} else if (state == 3) {
		document.getElementById("long_break").style.color = 'var(--themeColor)';
		document.getElementById("minutes").style.color = 'var(--themeColor)';
		document.getElementById("doppelpunkt").style.color = 'var(--themeColor)';
		document.getElementById("seconds").style.color = 'var(--themeColor)';
		document.getElementById("short_break").style.color = 'var(--font)';
		document.getElementById("work").style.color = 'var(--font)';
		document.getElementById("work").style.fontSize = '20px';
		document.getElementById("short_break").style.fontSize = '20px';
		document.getElementById("long_break").style.fontSize = '23px';
	}
}

//play-button turns into pause button, when it's clicked
function playVisibility() {
	startingMinutesWork = localStorage.getItem("workDuration");
	startingMinutesShortBreak = localStorage.getItem("shortBreakDuration");
	startingMinutesLongBreak = localStorage.getItem("longBreakDuration");
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
        (startingMinutes < 10) ? document.querySelector("#minutes").innerHTML = '0' + startingMinutes : document.querySelector("#minutes").innerHTML = startingMinutes;
        document.querySelector("#seconds").innerHTML = '00';
    }
}

function setShortBreak() {
    if (playing == false) {
        startingMinutes = document.getElementById("shortBreakInput").value;
        (startingMinutes < 10) ? document.querySelector("#minutes").innerHTML = '0' + startingMinutes : document.querySelector("#minutes").innerHTML = startingMinutes;
        document.querySelector("#seconds").innerHTML = '00';
    }
}

function setLongBreak() {
    if (playing == false) {
        startingMinutes = document.getElementById("longBreakInput").value;
        (startingMinutes < 10) ? document.querySelector("#minutes").innerHTML = '0' + startingMinutes : document.querySelector("#minutes").innerHTML = startingMinutes;
        document.querySelector("#seconds").innerHTML = '00';
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




function showSettings() {
	var x = document.getElementById("settingsDropdown");
	if (x.style.display == "flex") {
		document.getElementById("settings-icon").style.color = 'var(--icon)';
	  	x.style.display = "none";
	} else {
		document.getElementById("settings-icon").style.color = 'var(--themeColor)';
	  	x.style.display = "flex";
	}
}


function Input() {
	if (playing == false) {
		playVisibility();
	} else {
		return;
	}
}


function showThemes() {
	var x = document.getElementById("themes");
	if (x.style.visibility == "visible") {
		document.getElementById("palette-icon").style.color = 'var(--icon)';
	  	x.style.visibility = "hidden";
	} else {
		document.getElementById("palette-icon").style.color = 'var(--themeColor)';
	  	x.style.visibility = "visible";
		
	}
}


function updateThemeColor() {
	localStorage.setItem("themeColorLocalStorage", getComputedStyle(document.documentElement).getPropertyValue('--themeColor'));
	document.getElementById("palette-icon").style.color = 'var(--themeColor)';
	document.getElementById("wave").style.color = 'var(--themeColor)';
}


function localStorageDurations() {
	localStorage.setItem("workDuration", document.getElementById("workInput").value);
	localStorage.setItem("shortBreakDuration", document.getElementById("shortBreakInput").value);
	localStorage.setItem("longBreakDuration", document.getElementById("longBreakInput").value);
	playVisibility();

}

function retreiveDurations() {
	if(localStorage.getItem("workDuration")) {
		document.getElementById("workInput").value = localStorage.getItem("workDuration");
		document.getElementById("shortBreakInput").value = localStorage.getItem("shortBreakDuration");
		document.getElementById("longBreakInput").value = localStorage.getItem("longBreakDuration");
	} else {
		document.getElementById("workInput").value = 25;
		document.getElementById("shortBreakInput").value = 5;
		document.getElementById("longBreakInput").value = 15;
		localStorage.setItem("workDuration", 25);
		localStorage.setItem("shortBreakDuration", 5);
		localStorage.setItem("longBreakDuration", 15);
	}
	playVisibility();
}