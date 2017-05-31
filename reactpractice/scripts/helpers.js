let littleHelpers = {
	randomText: function() {
		let pronouns = ['ducky', 'ducted','graded','ignote','lies','omened','series','stour','unal','warmer'];
		let nouns = ['Mohole', 'cadeau', 'camil', 'facula', 'kroner', 'liard', 'litten', 'mats', 'okeh', 'vega'];

		return pronouns[Math.floor(Math.random()*10)] + '-' + nouns[Math.floor(Math.random()*10)];
	},

	clearingText: function(text) {
		return text.split(' ').join('-');
	}
};


export default littleHelpers;