const linkMale = 'https://uinames.com/api/?ext&amount=1&gender=male';
const linkFemale = 'https://uinames.com/api/?ext&amount=1&gender=female';
const maleButton = document.querySelector('#generate-male');
const femaleButton = document.querySelector('#generate-female');
let people = [];
let displayMain = document.querySelector('section.app').querySelectorAll('div');
let displayName = displayMain[0];
let displayAge = displayMain[1];
let displayRegion = displayMain[2];

function generateMale() {
	fetch(linkMale)
		.then(blob => blob.json())
		.then(data => {
			displayName.textContent = data.title + ' ' + data.name + ' ' + data.surname,
			displayAge.textContent = data.age + ' y.o.',
			displayRegion.textContent = 'from ' + data.region
		});
};

function generateFemale() {
	fetch(linkFemale)
		.then(blob => blob.json())
		.then(data => {
			displayName.textContent = data.title + ' ' + data.name + ' ' + data.surname,
			displayAge.textContent = data.age + ' y.o.',
			displayRegion.textContent = 'from ' + data.region
		});
};

maleButton.addEventListener('click', generateMale);
femaleButton.addEventListener('click', generateFemale);

