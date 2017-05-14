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

rockBtn.addEventListener('click', function() { gameStarted(1); });
paperBtn.addEventListener('click', function() { gameStarted(2); });
scissorsBtn.addEventListener('click', function() { gameStarted(3); });
lizardBtn.addEventListener('click', function() { gameStarted(4); });
spockBtn.addEventListener('click', function() { gameStarted(5); });

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
		eraseBattleDeck()
	};
	yourMove(value);
	enemyMove();
	if (doIWon()) {
		if (enemyHealth < 20) {
			getEnemyAvatar();
			enemyHealth = 100;
		};
		enemyHealth -= 15;
		healthBar.style.width = enemyHealth.toString() + '%';
		healthBar.textContent = enemyHealth.toString() + '%';
		battleStats.won++;
		counterWon.textContent = battleStats.won;
		counterKDA.textContent = battleStats.kda();
	} else if (battleStats.yourMove == battleStats.enemyMove) {
		
	} else {
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

getEnemyAvatar();