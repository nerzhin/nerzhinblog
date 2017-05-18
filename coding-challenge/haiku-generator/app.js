const randomWord = {
	noun: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
	pronoun: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=pronoun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
	verb: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=verb&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
	adjective: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
};

const relatedWordsSt = 'https://api.wordnik.com/v4/word.json/';
const relatedWordEnd = '/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

let haiku = [
	{
		title: 'First Row',
		pronoun: '',
		noun: '',
		verb: ''
	},
	{
		title: 'Second Row',
		adjective: '',
		nounSynonym: '',
		verb: ''
	},
	{
		title: 'Third Row',
		pronoun: '',
		nounSameContext: ''
	}
];

function getFirstRow() {
	fetch(randomWord.pronoun).then(blob => blob.json()).then(data => haiku[0].pronoun = data.word);
	fetch(randomWord.noun).then(blob => blob.json()).then(data => haiku[0].noun = data.word);
	fetch(randomWord.verb).then(blob => blob.json()).then(data => haiku[0].verb = data.word);
};

function getSecondRow() {
	fetch(randomWord.adjective).then(blob => blob.json()).then(data => haiku[1].adjective = data.word);
	fetch(relatedWordsSt + haiku[0].noun + relatedWordEnd).then(blob => blob.json()).then(data => {
		let counter = data[2].words.length;
		let random = Math.floor(Math.random() * counter) + 1;
		haiku[1].nounSynonym = data[2].words[random];
	});
	fetch(randomWord.verb).then(blob => blob.json()).then(data => haiku[1].verb = data.word);
};

function getThirdRow() {
	fetch(randomWord.pronoun).then(blob => blob.json()).then(data => haiku[2].pronoun = data.word);
	fetch(relatedWordsSt + haiku[0].noun + relatedWordEnd).then(blob => blob.json()).then(data => {
		let counter = data[4].words.length;
		let random = Math.floor(Math.random() * counter) + 1;
		haiku[2].nounSameContext = data[4].words[random];
	});
};

getFirstRow();
getSecondRow();
getThirdRow();
console.log(haiku[0].pronoun + ' ' + haiku[0].noun + ' ' + haiku[0].verb + ',');
console.log(haiku[1].adjective + ' ' + haiku[1].nounSynonym + ' ' + haiku[1].verb + ',');
console.log(haiku[2].pronoun + ' ' + haiku[2].nounSameContext + '.');

https://atomiks.github.io/tippyjs/