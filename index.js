const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

// Calculate the perimeter
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
// set the attribute stroke-dasharray to the perimeter we calculated
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},
	onComplete() {
		console.log('Timer is completed');
	},
});
