const inputs = document.querySelectorAll('input');
const fahrenheitInput = inputs[0];
const celsiusInput = inputs[1];

function convertFtoC(value) {
	let tempC = (5 / 9) * (value - 32);
	return Math.round(tempC);
};

function convertCtoF(value) {
	let tempF = ((9 / 5) * value) + 32;
	return Math.round(tempF);
};

function displayF() {
	fahrenheitInput.value = convertCtoF(this.value);
};

function displayC() {
	celsiusInput.value = convertFtoC(this.value);
};

function clearInput() {
	this.value = '';
};

fahrenheitInput.addEventListener('change', displayC);
fahrenheitInput.addEventListener('keyup', displayC);
fahrenheitInput.addEventListener('click', clearInput);

celsiusInput.addEventListener('change', displayF);
celsiusInput.addEventListener('keyup', displayF);
celsiusInput.addEventListener('click', clearInput);