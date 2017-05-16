const inputs = document.querySelectorAll('input');
const encryptInput = inputs[0];
const decryptInput = inputs[1];
const copyButton = document.querySelector('.btn');

function encryptMsg(text) {
	return text
		.split(' ')
		.map(text => text
			.split('')
			.map(letter => {
				if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
					return engEncrypt(letter);
				} else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
					return engEncrypt(letter);
				} else if (letter.charCodeAt(0) >= 1040 && letter.charCodeAt(0) <= 1071) {
					return rusEncrypt(letter);
				} else if (letter.charCodeAt(0) >= 1072 && letter.charCodeAt(0) <= 1103) {
					return rusEncrypt(letter);
				} else if (letter.charCodeAt(0) == 1025 || letter.charCodeAt(0) == 1105) {
					return rusEncrypt(letter);
				} else {
					return letter;
				};
			})
			.join(''))
		.join(' ');
};

function rusEncrypt(letter) {
	let uppercased = false;
	if (letter == letter.toUpperCase()) {
		uppercased = !uppercased;
	};
	let code = letter.toUpperCase().charCodeAt(0);
	let result = 0;
	if (code >= 1040 && code <= 1042) {
		result = code + 29;
	} else if (code >= 1069 && code <= 1071) {
		result = code - 29;
	} else if (code == 1025) {
		result = 1043;
	} else if (code == 1048) {
		result = 1025;
	} else if (code >= 1046 && code <= 1047) {
		result = code - 2;
	} else {
		result = code - 3;
	};
	let decrypted = String.fromCharCode(result);
	return (uppercased) ? decrypted : decrypted.toLowerCase();
};

function engEncrypt(letter) {
	let uppercased = false;
	if (letter == letter.toUpperCase()) {
		uppercased = !uppercased;
	};
	let code = letter.toUpperCase().charCodeAt(0);
	let result = 0;
	if (code >= 88 && code <= 90) {
		result = code - 23;
	} else if (code >= 65 && code <= 67) {
		result = code + 23;
	} else {
		result = code - 3;
	};
	let decrypted = String.fromCharCode(result);
	return (uppercased) ? decrypted : decrypted.toLowerCase();
};

