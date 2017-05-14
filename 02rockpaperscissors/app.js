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

getEnemyAvatar();

