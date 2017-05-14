let images = [
	0, 
	'icons/rock.png',
	'icons/paper.png',
	'icons/scissors.png',
	'icons/lizard.png',
	'icons/spock.png'
];
let battle = {
	enemyMove: '',
	yourMove: ''
};
let counters = {
	won: 11,
	lost: 2,
	kda: function() {
		return Number(this.won/this.lost);
	}
};
function getEnemyAvatar() {
	let random = Math.floor(Math.random()*100 + 1);
	const enemyAvatar = document.querySelector('.enemy-photo');
	enemyAvatar.src = 'https://robohash.org/' + random + '.png?size=100x100';
};

function healthBar() {
	const healthBar = document.querySelector('.health-bar').querySelector('div');
	healthBar.style.width = '45%';
	healthBar.textContent = '45%';
};

function enemyMove() {
	let random = Math.floor(Math.random() * 5) + 1;
	let elem = document.createElement('img');
	elem.src = images[random];
	elem.className = 'enemy-pick';
	document.querySelector('.enemy-move').appendChild(elem);
	battle.enemyMove = random;
};

function eraseBattleDeck() {
	document.querySelector('.enemy-move').removeChild(document.querySelector('.enemy-pick'));
};

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const lizardBtn = document.querySelector('#lizard');
const spockBtn = document.querySelector('#spock');

rockBtn.addEventListener('click', yourMove(1));
paperBtn.addEventListener('click', yourMove(2));
scissorsBtn.addEventListener('click', yourMove(3));
lizardBtn.addEventListener('click', yourMove(4));
spockBtn.addEventListener('click', yourMove(5));

function yourMove(value) {
	battle.yourMove = value;
};

function game() {

}

const counterWon = document.querySelector('.won').querySelector('span');
const counterLost = document.querySelector('.lost').querySelector('span');
const counterKDA = document.querySelector('.kda').querySelector('span');

counterWon.textContent = counters.won;
counterLost.textContent = counters.lost;
counterKDA.textContent = counters.kda();
getEnemyAvatar();