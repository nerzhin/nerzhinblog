const magicWordsNumbers = [3,5,7,8,11,13];
const magicWordsTitles = ['fizz','buzz','pop','zing','whack','chop'];

let counter = value => {
	let number = 0;
	let arr = [];
	let result = '';

	while (number <= value) {
		(value % number === 0) ? arr.push(number) : '';
		number++;
	};

	arr.map(n => {
		(magicWordsNumbers.indexOf(n) !== -1) ? result += magicWordsTitles[magicWordsNumbers.indexOf(n)] : '';
	});

	return (result == '') ? value : result;

};

for (let i=0; i <= 100; i++) {
	console.log(counter(i));
};