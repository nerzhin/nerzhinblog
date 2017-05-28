const elements = {
	eightBall: document.querySelector('.eightball'),
	answer: document.querySelector('.answer-text'),
	btn: document.querySelector('button')
};

const answers = {
	positive: [
		'it is certain',
		'it is decidedly so',
		'without a doubt',
		'yes — definitely',
		'you may rely on it'
	],
	soSo: [
		'as I see it, yes',
		'most likely',
		'outlook good',
		'signs point to yes',
		'yes..?'
	],
	neutral: [
		'reply hazy, try again',
		'ask again later',
		'better not tell you now',
		'cannot predict now',
		'concentrate and ask again'
	],
	negative: [
		'don’t count on it',
		'my reply is no',
		'my sources say no',
		'outlook not so good',
		'very doubtful'
	]
};

let statistics = {
	positive: 0,
	soSo: 0,
	neutral: 0,
	negative: 0
};

elements.btn.addEventListener('click', function() {
	elements.eightBall.className += ' animated shake';
	let randomX = Math.floor((Math.random()*1000)/200);
	let randomY = Math.floor((Math.random()*800)/200);
	switch(randomY) {
		case 0:
			elements.answer.textContent = answers.positive[randomX];
			statistics.positive++;
			break;
		case 1:
			elements.answer.textContent = answers.soSo[randomX];
			statistics.soSo++;
			break;
		case 2:
			elements.answer.textContent = answers.neutral[randomX];
			statistics.neutral++;
			break;
		case 3:
			elements.answer.textContent = answers.negative[randomX];
			statistics.negative++;
			break;
	};
	setTimeout(function() {
		elements.eightBall.className = 'eightball';
	}, 1000);
});
