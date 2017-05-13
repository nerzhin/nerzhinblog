const linkMale = 'http://uinames.com/api/?ext&amount=1&gender=male';
const linkFemale = 'http://uinames.com/api/?ext&amount=1&gender=female';
const maleButton = document.querySelector('#generate-male');
const femaleButton = document.querySelector('#generate-female');
let people = [];
let displayMain = document.querySelector('section.app').querySelectorAll('div');
let displayName = displayMain[0];
let displaySurname = displayMain[1];
let displayGender = displayMain[2];

function generateMale() {
	fetch(linkMale)
		.then(blob => blob.json())
		.then(data => {
			displayName.textContent = data.name,
			displaySurname.textContent = data.surname,
			displayGender.textContent = data.gender
		});
};

function generateFemale() {
	fetch(linkFemale)
		.then(blob => blob.json())
		.then(data => {
			displayName.textContent = data.name,
			displaySurname.textContent = data.surname,
			displayGender.textContent = data.gender
		});
};

maleButton.addEventListener('click', generateMale);
femaleButton.addEventListener('click', generateFemale);

