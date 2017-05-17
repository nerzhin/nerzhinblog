const api = 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=4&maxLength=8&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
const playground = document.querySelector('.playground');
const keyboardRows = document.querySelectorAll('.row');
const keyboardBtnsFirstRow = keyboardRows[0].childNodes;
const keyboardBtnsSecondRow = keyboardRows[1].childNodes;
const keyboardBtnsThirdRow = keyboardRows[2].childNodes;
let stats = {
	maxAttempts: 6, //максимальное к-во ошибок
	wrongGuessed: 0, //к-во неправильно угаданных
	maxFailed: 0 //к-во уникальных букв, сколько нужно отгадать
};
let secretWord = '';

function getData() {
		fetch(api)
	.then(blob => blob.json())
	.then(data => secretWord = data.word);
	secretWord.toLowerCase();
};

function showSecretWord() {
	for (let i=0; i < secretWord.length; i++) {
	let elem = document.createElement('div');
	elem.className = 'letter-'+i;
	elem.textContent = '*';
	playground.appendChild(elem);
};
	letterCounter();
};

function letterCounter() {
	let arr = secretWord.split('');
	let newarr = [];
	for (let i = 0; i<arr.length; i++) {
	    if (i > 0) { 
	        if (newarr.indexOf(arr[i]) == -1) {
	            newarr.push(arr[i]);
	        }} else { newarr.push(arr[i]);}
	};
	stats.maxFailed = newarr.length;
};

function checkTheLetter() {
	let letter = this.textContent.toLowerCase();
	if (secretWord.indexOf(letter) == -1) {
		
	} else {

	};
};

function rightLetter(value) {
	let indexes = [];
		for (let i = 0; i < secretWord.length; i++) {
			if (secretWord[i] == value) {
				indexes.push(i);
			};
		};
		for (let j = 0; j < indexes.length; j++) {
			playground.childNodes[indexes[j]].textContent = secretWord[indexes[j]];
		};
};

function wrongLetter(value) {
	stats.wrongGuessed++;
};

function clearPlayground() {
	while (playground.firstChild) {
			playground.removeChild(playground.firstChild)
		};
};


document.querySelector('#fff').addEventListener('click', function() {
	document.querySelector('.keyboard').style.display = 'block';
	showSecretWord();
});

keyboardBtnsFirstRow[1].addEventListener('click', checkTheLetter);
keyboardBtnsFirstRow[2].addEventListener('click', checkTheLetter);
keyboardBtnsFirstRow[3].addEventListener('click', checkTheLetter);
keyboardBtnsFirstRow[4].addEventListener('click', checkTheLetter);
keyboardBtnsFirstRow[5].addEventListener('click', checkTheLetter);
keyboardBtnsFirstRow[6].addEventListener('click', checkTheLetter);
keyboardBtnsFirstRow[7].addEventListener('click', checkTheLetter);
keyboardBtnsFirstRow[8].addEventListener('click', checkTheLetter);
keyboardBtnsFirstRow[9].addEventListener('click', checkTheLetter);
keyboardBtnsFirstRow[10].addEventListener('click', checkTheLetter);

keyboardBtnsSecondRow[1].addEventListener('click', checkTheLetter);
keyboardBtnsSecondRow[2].addEventListener('click', checkTheLetter);
keyboardBtnsSecondRow[3].addEventListener('click', checkTheLetter);
keyboardBtnsSecondRow[4].addEventListener('click', checkTheLetter);
keyboardBtnsSecondRow[5].addEventListener('click', checkTheLetter);
keyboardBtnsSecondRow[6].addEventListener('click', checkTheLetter);
keyboardBtnsSecondRow[7].addEventListener('click', checkTheLetter);
keyboardBtnsSecondRow[8].addEventListener('click', checkTheLetter);
keyboardBtnsSecondRow[9].addEventListener('click', checkTheLetter);

keyboardBtnsThirdRow[1].addEventListener('click', checkTheLetter);
keyboardBtnsThirdRow[2].addEventListener('click', checkTheLetter);
keyboardBtnsThirdRow[3].addEventListener('click', checkTheLetter);
keyboardBtnsThirdRow[4].addEventListener('click', checkTheLetter);
keyboardBtnsThirdRow[5].addEventListener('click', checkTheLetter);
keyboardBtnsThirdRow[6].addEventListener('click', checkTheLetter);
keyboardBtnsThirdRow[7].addEventListener('click', checkTheLetter);

getData();