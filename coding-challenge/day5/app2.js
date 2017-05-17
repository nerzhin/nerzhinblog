const api = {
	easy: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=3&maxLength=6&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
	medium: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=7&maxLength=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
	hard: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=11&maxLength=20&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
};	
let result = '';
const playground = document.querySelector('.playground');
let stats = {
	attempts: 6,
	guessed: 0,
	failed: 0
};

function getSecretWord (level) {
		let link = '';
		switch(level) {
			case 1:
				link = api.easy;
				break;
			case 2:
				link = api.medium;
				break;
			case 3:
				link = api.hard;
				break;
		};
		fetch(link)
			.then(blob => blob.json())
			.then(data => (result = data.word));
		};

	function showSecretWord() {
		let x = '';
		for (let i = 0; i < result.length; i++) {
			if(i == 0) {
			x += result[i]; 
			} else if (i == (result.length-1)) {
				x+= result[i];
			} else {
				x += '*';
			};
		};
		return x;
	};

	function draw(index) {
		let elem = document.createElement('div');
		elem.style.width = '50px';
		elem.style.height = '50px';
		elem.style.borderWidth = '2px';
		elem.style.borderStyle = 'solid';
		elem.style.borderColor = 'darkgrey';
		elem.style.backgroundColor = 'lightgray';
		elem.style.fontSize = '20px';
		elem.style.color = 'black';
		elem.style.textAlign = 'center';
		elem.style.padding = '5px';
		elem.style.display = 'inline-block';
		elem.className = index;
		playground.appendChild(elem);
	};

	function drawSecretWord() {
		let n = result.length;
		let word = showSecretWord();
		for (let i = 0; i < n; i++) {
			draw('letter-'+i);
			let letter = playground.querySelectorAll('div')[i];
			letter.textContent = word[i];
		};
	};

	function clear() {
		let n = result.length;
		for (let i=0; i < n; i++) {
			let elem = document.querySelector('.letter-'+i);
			playground.removeChild(elem);
		};
	};

	function testLetter(letter) {
		let arr = result.split('').map(word => word.charCodeAt(0));
		let enteredLetter = letter.charCodeAt(0);
		return (arr.indexOf(enteredLetter) == -1) ? false : true;
	};

	function showGuessedLetter(letter) {
		let arr = [];
		for (let i = 0; i < result.length; i++) {
			if (result[i] == letter) {
				arr.push(i);
			};
		};
		for (let j = 0; j < arr.length; j++) {
			let elem = document.querySelector('.letter-' + arr[j]);
			elem.textContent = result[arr[j]];
		};
	};

