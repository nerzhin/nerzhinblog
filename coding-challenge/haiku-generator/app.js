const randomWord = {
	noun: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
	pronoun: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=pronoun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
	verb: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=verb&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
	adjective: 'https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
};

/*const relatedWordsSt = 'https://api.wordnik.com/v4/word.json/';
const relatedWordEnd = '/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
*/ 
let haiku = [
	{
		title: 'First Row',
		pronoun: '',
		pronounDef: '',
		noun: '',
		nounDef: '',
		verb: '',
		verbDef: '',
		nounLink: '',
		pronounLink: '',
		verbLink: ''
	},
	{
		title: 'Second Row',
		adjective: '',
		adjectiveDef: '',
		adjectiveLink: '',
		noun: '',
		nounDef: '',
		nounLink: '',
		verb: '',
		verbDef: '',
		verbLink: ''
	},
	{
		title: 'Third Row',
		pronoun: '',
		pronounDef: '',
		pronounLink: '',
		noun: '',
		nounLink: '',
		nounDef: '',
		verb: '',
		verbLink: '',
		verbDef: ''
	}
];

function getFirstRow() {
	fetch(randomWord.pronoun).then(blob => blob.json()).then(data => haiku[0].pronoun = data.word);
	fetch(randomWord.noun).then(blob => blob.json()).then(data => {
		haiku[0].noun = data.word;
		haiku[0].link = 'https://api.wordnik.com/v4/word.json/' + data.word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
		 });
	fetch(randomWord.verb).then(blob => blob.json()).then(data => haiku[0].verb = data.word);
	
};

function getSecondRow() {
	fetch(randomWord.adjective).then(blob => blob.json()).then(data => haiku[1].adjective = data.word);
	fetch(randomWord.noun).then(blob => blob.json()).then(data => {
		haiku[1].noun = data.word });
	/*fetch(link).then(blob => blob.json()).then(data => { 
		console.log(data);
    if (data) {
			let arr = data.filter(value => {
				value.relationshipType == "synonym"
			});
			console.log(arr);
			if (arr > 0) {
				let random = Math.floor(Math.random()*arr[0].words.length) + 1;
				console.log(random);
				haiku[1].nounSynonym = arr[0].words[random];
				console.log(arr[0].words[random]);
			} else {
						fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5').then(blob=>blob.json()).then(data=> haiku[1].nounSynonym = data.word)

	};

	} else {
		fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5').then(blob=>blob.json()).then(data=> haiku[1].nounSynonym = data.word)
	};
});*/
	fetch(randomWord.verb).then(blob => blob.json()).then(data => haiku[1].verb = data.word);
};

function getThirdRow() {
	fetch(randomWord.pronoun).then(blob => blob.json()).then(data => haiku[2].pronoun = data.word);
	fetch(randomWord.noun).then(blob => blob.json()).then(data => {
		haiku[2].noun = data.word });
	/*fetch(link).then(blob => blob.json()).then(data => { 
    console.log(data);
    if (data) {
		let arr = data.filter(value => {
			value.relationshipType == "same-context"
		});
		console.log(arr);
		
		if (arr > 0) {
			let random = Math.floor(Math.random()*arr[0].words.length) + 1;
			console.log(random);
			haiku[2].nounSameContext = arr[0].words[random];
			console.log(arr[0].words[random]);
		} else {
					fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5').then(blob=>blob.json()).then(data=> haiku[2].nounSameContext = data.word)

};

	} else {
		fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5').then(blob=>blob.json()).then(data=> haiku[2].nounSameContext = data.word)
	};
});*/
	fetch(randomWord.verb).then(blob => blob.json()).then(data => haiku[2].verb = data.word);
};

function getDefinitions() {
	
	fetch(haiku[0].link)
		.then(blob => blob.json())
		.then(data => haiku[0].nounDef = data[0].text);
};

getFirstRow();
getSecondRow();
getThirdRow();

//const firstRowSection = document.querySelector('.first-row');
//const firstRowSection = document.querySelector('.first-row');
//const firstRowSection = document.querySelector('.first-row');

function showHaiku() {

}

//document.querySelector('button').addEventListener('click', showHaiku);
