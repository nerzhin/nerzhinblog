let icons = {
	1: 'icons/rock.png',	
	2: 'icons/paper.png',
	3: 'icons/scissors.png',
	4: 'icons/lizard.png',
	5: 'icons/spock.png'
};

const battleContainer = document.querySelector('.enemy-move');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const lizardBtn = document.querySelector('#lizard');
const spockBtn = document.querySelector('#spock');
const counterWon = document.querySelector('.won').querySelector('span');
const counterLost = document.querySelector('.lost').querySelector('span');
const counterKDA = document.querySelector('.kda').querySelector('span');
const healthBar = document.querySelector('.health-bar').querySelector('div');

const winAnimation = 'animated swing';
const loseAnimation = 'animated wobble';
const chosenOneAnimation = 'animated jello';
let enemyHealth = 100;


let battleStats = {
	enemyMove: '',
	yourMove: '',
	won: 0,
	lost: 0,
	kda: function() {
		return (this.won === 0 && this.lost === 0) ? 0 : Number(this.won/this.lost).toFixed(2);
	}
};


function getEnemyAvatar() {
	let random = Math.floor(Math.random()*100 + 1);
	const enemyAvatar = document.querySelector('.enemy-photo');
	enemyAvatar.src = 'https://robohash.org/' + random + '.png?size=100x100';
};

rockBtn.addEventListener('click', function() { rockBtn.className = 'animated jello'; gameStarted(1); });
paperBtn.addEventListener('click', function() { paperBtn.className = 'animated jello'; gameStarted(2); });
scissorsBtn.addEventListener('click', function() {  scissorsBtn.className = 'animated jello'; gameStarted(3); });
lizardBtn.addEventListener('click', function() {  lizardBtn.className = 'animated jello'; gameStarted(4); });
spockBtn.addEventListener('click', function() {  spockBtn.className = 'animated jello'; gameStarted(5); });

rockBtn.addEventListener('animationend', function() { rockBtn.classList.remove('animated'); rockBtn.classList.remove('jello'); });
paperBtn.addEventListener('animationend', function() { paperBtn.classList.remove('animated'); paperBtn.classList.remove('jello'); });
scissorsBtn.addEventListener('animationend', function() { scissorsBtn.classList.remove('animated'); scissorsBtn.classList.remove('jello'); });
lizardBtn.addEventListener('animationend', function() { lizardBtn.classList.remove('animated'); lizardBtn.classList.remove('jello'); });
spockBtn.addEventListener('animationend', function() { spockBtn.classList.remove('animated'); spockBtn.classList.remove('jello'); });

function yourMove(value) {
	let elem = document.createElement('img');
	elem.src = icons[value];
	elem.className = 'your-pick';
	battleStats.yourMove = value;
	battleContainer.appendChild(elem);
};

function enemyMove() {
	let random = Math.floor(Math.random() * 5) + 1;
	let elem = document.createElement('img');
	elem.src = icons[random];
	elem.className = 'enemy-pick';
	battleStats.enemyMove = random;
	battleContainer.appendChild(elem);
};

function eraseBattleDeck() {
	battleContainer.removeChild(document.querySelector('.enemy-pick'));
	battleContainer.removeChild(document.querySelector('.your-pick'));
};

function gameStarted(value) {
	if (battleContainer.hasChildNodes()) {
		eraseBattleDeck();
	};
	yourMove(value);
	enemyMove();
	if (doIWon()) {
		if (enemyHealth < 20) {
			getEnemyAvatar();
			enemyHealth = 100;
		};
		let enemyAvatar = document.querySelector('.enemy-photo');
		enemyAvatar.classList.add('animated');
		enemyAvatar.classList.add('tada');
		enemyAvatar.addEventListener('animationend', function() { enemyAvatar.classList.remove('animated'); enemyAvatar.classList.remove('tada'); });
		document.querySelector('.your-pick').classList.add('animated');
		document.querySelector('.your-pick').classList.add('swing');
		document.querySelector('.enemy-pick').classList.add('animated');
		document.querySelector('.enemy-pick').classList.add('wobble');
		enemyHealth -= 15;
		healthBar.style.width = enemyHealth.toString() + '%';
		healthBar.textContent = enemyHealth.toString() + '%';
		battleStats.won++;
		counterWon.textContent = battleStats.won;
		counterKDA.textContent = battleStats.kda();
	} else if (battleStats.yourMove == battleStats.enemyMove) {
		//nothing here
		document.querySelector('.your-pick').classList.add('animated');
		document.querySelector('.your-pick').classList.add('rubberBand');
		document.querySelector('.enemy-pick').classList.add('animated');
		document.querySelector('.enemy-pick').classList.add('rubberBand');
	} else {
		document.querySelector('.enemy-pick').classList.add('animated');
		document.querySelector('.enemy-pick').classList.add('swing');
		document.querySelector('.your-pick').classList.add('animated');
		document.querySelector('.your-pick').classList.add('wobble');
		battleStats.lost++;
		counterLost.textContent = battleStats.lost;
		counterKDA.textContent = battleStats.kda();
	}
};

function doIWon() {
	let amIWon = false;
	switch(battleStats.yourMove) {
		case 1:
			if (battleStats.enemyMove == 3 || battleStats.enemyMove == 4) {
				amIWon = !amIWon;
			};
			break;
		case 2:
			if (battleStats.enemyMove == 1 || battleStats.enemyMove == 5) {
				amIWon = !amIWon;
			};
			break;
		case 3:
			if (battleStats.enemyMove == 2 || battleStats.enemyMove == 4) {
				amIWon = !amIWon;
			};
			break;
		case 4:
			if (battleStats.enemyMove == 2 || battleStats.enemyMove == 5) {
				amIWon = !amIWon;
			};
			break;
		case 5:
			if (battleStats.enemyMove == 1 || battleStats.enemyMove == 3) {
				amIWon = !amIWon;
			};
			break;
	};
	return amIWon;
};

function animate() {

}
getEnemyAvatar();