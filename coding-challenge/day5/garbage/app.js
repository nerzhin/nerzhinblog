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

let gameCore = {
	getSecretWord: level => {
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
			.then(data => {
				result = data.word;
				});
		},
	showSecretWord: function() {
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
	},
	draw: index => {
		let elem = document.createElement('div');
		elem.className = 'letter '+ index;
		playground.appendChild(elem);
	},
	drawSecretWord: function() {
		let n = result.length;
		let word = this.showSecretWord();
		for (let i = 0; i < n; i++) {
			this.draw('letter-'+i);
			let letter = playground.querySelectorAll('div')[i];
			letter.textContent = word[i];
		};
	},
	clear: function() {
		while (playground.firstChild) {
			playground.removeChild(playground.firstChild)
		};
	},
	testLetter: letter => {
		let arr = result.split('').map(word => word.charCodeAt(0));
		let enteredLetter = letter.charCodeAt(0);
		return (arr.indexOf(enteredLetter) == -1) ? false : true;
	},
	showGuessedLetter: letter => {
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
	}
};

function pressedBtn(value) {
		let newValue = value.toLowerCase();
		if (gameCore.testLetter(newValue)) {
			gameCore.showGuessedLetter(newValue);
			stats.guessed++;
		} else {
			stats.failed++;
			stats.attempts--;
		};

const keyboardRows = document.querySelectorAll('.row');
const keyboardBtnsFirstRow = keyboardRows[0].childNodes;
const keyboardBtnsSecondRow = keyboardRows[1].childNodes;
const keyboardBtnsThirdRow = keyboardRows[2].childNodes;

keyboardBtnsFirstRow[1].addEventListener('click', function() {
	pressedBtn(keyboardBtnsFirstRow[1].textContent);
});
keyboardBtnsFirstRow[2].addEventListener('click', function() {
	pressedBtn(keyboardBtnsFirstRow[2].textContent);
});
keyboardBtnsFirstRow[3].addEventListener('click', function() {
	pressedBtn(keyboardBtnsFirstRow[3].textContent);
});
keyboardBtnsFirstRow[4].addEventListener('click', function() {
	pressedBtn(keyboardBtnsFirstRow[4].textContent);
});
keyboardBtnsFirstRow[5].addEventListener('click', function() {
	pressedBtn(keyboardBtnsFirstRow[5].textContent);
});
keyboardBtnsFirstRow[6].addEventListener('click', function() {
	pressedBtn(keyboardBtnsFirstRow[6].textContent);
});
keyboardBtnsFirstRow[7].addEventListener('click', function() {
	pressedBtn(keyboardBtnsFirstRow[7].textContent);
});
keyboardBtnsFirstRow[8].addEventListener('click', function() {
	pressedBtn(keyboardBtnsFirstRow[8].textContent);
});
keyboardBtnsFirstRow[9].addEventListener('click', function() {
	pressedBtn(keyboardBtnsFirstRow[9].textContent);
});
keyboardBtnsFirstRow[10].addEventListener('click', function() {
	pressedBtn(keyboardBtnsFirstRow[10].textContent);
});

keyboardBtnsSecondRow[1].addEventListener('click', function() {
	pressedBtn(keyboardBtnsSecondRow[1].textContent);
});
keyboardBtnsSecondRow[2].addEventListener('click', function() {
	pressedBtn(keyboardBtnsSecondRow[2].textContent);
});
keyboardBtnsSecondRow[3].addEventListener('click', function() {
	pressedBtn(keyboardBtnsSecondRow[3].textContent);
});
keyboardBtnsSecondRow[4].addEventListener('click', function() {
	pressedBtn(keyboardBtnsSecondRow[4].textContent);
});
keyboardBtnsSecondRow[5].addEventListener('click', function() {
	pressedBtn(keyboardBtnsSecondRow[5].textContent);
});
keyboardBtnsSecondRow[6].addEventListener('click', function() {
	pressedBtn(keyboardBtnsSecondRow[6].textContent);
});
keyboardBtnsSecondRow[7].addEventListener('click', function() {
	pressedBtn(keyboardBtnsSecondRow[7].textContent);
});
keyboardBtnsSecondRow[8].addEventListener('click', function() {
	pressedBtn(keyboardBtnsSecondRow[8].textContent);
});
keyboardBtnsSecondRow[9].addEventListener('click', function() {
	pressedBtn(keyboardBtnsSecondRow[9].textContent);
});

keyboardBtnsThirdRow[1].addEventListener('click', function() {
	pressedBtn(keyboardBtnsThirdRow[1].textContent);
});
keyboardBtnsThirdRow[2].addEventListener('click', function() {
	pressedBtn(keyboardBtnsThirdRow[2].textContent);
});
keyboardBtnsThirdRow[3].addEventListener('click', function() {
	pressedBtn(keyboardBtnsThirdRow[3].textContent);
});
keyboardBtnsThirdRow[4].addEventListener('click', function() {
	pressedBtn(keyboardBtnsThirdRow[4].textContent);
});
keyboardBtnsThirdRow[5].addEventListener('click', function() {
	pressedBtn(keyboardBtnsThirdRow[5].textContent);
});
keyboardBtnsThirdRow[6].addEventListener('click', function() {
	pressedBtn(keyboardBtnsThirdRow[6].textContent);
});
keyboardBtnsThirdRow[7].addEventListener('click', function() {
	pressedBtn(keyboardBtnsThirdRow[7].textContent);
});










