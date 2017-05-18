const qInput = document.querySelector('#question');
const btn = document.querySelector('#start');
const pics = document.querySelectorAll('img');
const answer = document.querySelector('.answer');

const phrases = [
	0,
	'get lost',
	'fuck you',
	'gtfo',
	'some shit'
];

const albumCovers = [
	0,
	'blur-covers/13.jpg',
	"blur-covers/blur.jpg",
	"blur-covers/great-escape.jpg",
	"blur-covers/leisure.jpeg",
	"blur-covers/modern-life-is-rubbish.jpg",
	"blur-covers/parklife.jpg",
	"blur-covers/think-tank.jpg"
];

btn.addEventListener('click', function() {
	let randomPhrase = Math.floor(Math.random()*4) + 1;
	let randomShape = Math.floor(Math.random()*8) + 1;
	let randomPic = Math.floor(Math.random() * 7) + 1;
	let elem = document.createElement('img');
	elem.src = albumCovers[randomPic];
	elem.classList.add('random-' + randomShape);
	//answer.textContent = phrases[randomPhrase];
	answer.appendChild(elem);
});