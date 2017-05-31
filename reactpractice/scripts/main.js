let React = require('react');
let ReactDOM = require('react-dom');

let elem = document.querySelector('main');

let StorePicker = React.createClass({

	render: function() {
		return (
			<h1>Hello, React</h1>
		)
	}
});

ReactDOM.render(<StorePicker/>, elem);