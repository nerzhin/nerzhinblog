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
		/*pronounDef: '',*/
		noun: '',
		/*nounDef: '',*/
		verb: '',
		/*verbDef: '',*/
		/*nounLink: '',
		pronounLink: '',
		verbLink: ''*/
	},
	{
		title: 'Second Row',
		adjective: '',
		/*adjectiveDef: '',
		adjectiveLink: '',*/
		noun: '',
		/*nounDef: '',
		nounLink: '',*/
		verb: '',
		/*verbDef: '',
		verbLink: ''*/
	},
	{
		title: 'Third Row',
		pronoun: '',
		/*pronounDef: '',
		pronounLink: '',*/
		noun: '',
		/*nounLink: '',
		nounDef: '',*/
		verb: '',
		/*verbLink: '',
		verbDef: ''*/
	}
];

function getFirstRow() {
	fetch(randomWord.pronoun).then(blob => blob.json()).then(data => {
		haiku[0].pronoun = data.word;
		haiku[0].pronounLink = 'https://api.wordnik.com/v4/word.json/' + data.word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
	});
	fetch(randomWord.noun).then(blob => blob.json()).then(data => {
		haiku[0].noun = data.word;
		haiku[0].nounLink = 'https://api.wordnik.com/v4/word.json/' + data.word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
		 });
	fetch(randomWord.verb).then(blob => blob.json()).then(data => {
		haiku[0].verb = data.word;
		haiku[0].verbLink = 'https://api.wordnik.com/v4/word.json/' + data.word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
	});
	
};

function getSecondRow() {
	fetch(randomWord.adjective).then(blob => blob.json()).then(data => {
		haiku[1].adjective = data.word;
		haiku[1].adjectiveLink = 'https://api.wordnik.com/v4/word.json/' + data.word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
	});
	fetch(randomWord.noun).then(blob => blob.json()).then(data => {
		haiku[1].noun = data.word;
		haiku[1].nounLink = 'https://api.wordnik.com/v4/word.json/' + data.word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
	
		 });
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
	fetch(randomWord.verb).then(blob => blob.json()).then(data => {
		haiku[1].verb = data.word;
		haiku[1].verbLink = 'https://api.wordnik.com/v4/word.json/' + data.word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
	
	});
};

function getThirdRow() {
	fetch(randomWord.pronoun).then(blob => blob.json()).then(data => {
		haiku[2].pronoun = data.word;
		haiku[2].pronounLink = 'https://api.wordnik.com/v4/word.json/' + data.word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
	
	});
	fetch(randomWord.noun).then(blob => blob.json()).then(data => {
		haiku[2].noun = data.word;
		haiku[2].nounLink = 'https://api.wordnik.com/v4/word.json/' + data.word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
	
		});
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
	fetch(randomWord.verb).then(blob => blob.json()).then(data => {
		haiku[2].verb = data.word;
		haiku[2].verbLink = 'https://api.wordnik.com/v4/word.json/' + data.word +'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
	
	});
};

/*function getDefinitions(link, partOfSpeech) {
	fetch(link)
		.then(blob => blob.json())
		.then(data => partOfSpeech = data[0].text);
};*/

getFirstRow();
getSecondRow();
getThirdRow();
/*
getDefinitions(haiku[0].nounLink, haiku[0].nounDef);
getDefinitions(haiku[0].pronounLink, haiku[0].pronounDef);
getDefinitions(haiku[0].verbLink, haiku[0].verbDef);

getDefinitions(haiku[1].adjectiveLink, haiku[1].adjectiveDef);
getDefinitions(haiku[1].nounLink, haiku[1].nounDef);
getDefinitions(haiku[1].verbLink, haiku[1].verbDef);

getDefinitions(haiku[2].pronounLink, haiku[2].pronounDef);
getDefinitions(haiku[2].nounLink, haiku[2].nounDef);
getDefinitions(haiku[2].verbLink, haiku[2].verbDef);*/


const firstRowSection = document.querySelector('.first-row');
const secondRowSection = document.querySelector('.second-row');
const thirdRowSection = document.querySelector('.third-row');
const btn = document.querySelector('button');

function firstOne() {
	firstRowSection.textContent = haiku[0].pronoun + ' ' + haiku[0].noun + ' ' + haiku[0].verb + ',';
};

function secondOne() {
	secondRowSection.textContent = haiku[1].adjective + ' ' + haiku[1].noun + ' ' + haiku[1].verb + ',';
};

function thirdOne() {
	thirdRowSection.textContent = haiku[2].pronoun + ' ' + haiku[2].noun + ' ' + haiku[2].verb + '.';
};

function all() {
	firstOne();
	secondOne();
	thirdOne();
};

btn.addEventListener('click', function() {
	all();	
});
