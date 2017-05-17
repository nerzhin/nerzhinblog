const api = {
	easy: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=3&maxLength=6&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
	medium: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=7&maxLength=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
	hard: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=11&maxLength=20&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
};	
let result = '';

function getSecretWord(level) {
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
		} else if (i == result.length-1) {
			x+= result[i-1];
		} else {
			x += '*';
		};
	};
	return x;
};

