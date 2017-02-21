//will export a function that returns a random number after taking in a min and max value as arguments

module.exports = function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	};
