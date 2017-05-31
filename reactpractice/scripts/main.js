let React = require('react');
let ReactDOM = require('react-dom');

let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let Navigation = ReactRouter.Navigation;
let createBrowserHistory = require('history/lib/createBrowserHistory');

let elem = document.querySelector('main');

/* Main app */

let App = React.createClass({

		render: function() {
			return (
				<div className="catch-of-the-day">
					<div className="menu">
						<Header/>
					</div>
					<Order/>
					<Inventory/>
				</div>

			)
		}
});

/* Header */

let Header = React.createClass({

		render: function() {
			return (
				<p>Header</p>
				)
		}
});

/* Order */

let Order = React.createClass({

		render: function() {
			return (
				<p>Order</p>
				)
		}
});

/* Inventory */

let Inventory = React.createClass({

		render: function() {
			return (
				<p>Inventory</p>
				)
		}
});

/* <StorePicker/> */
let StorePicker = React.createClass({

	render: function() {
		{/* creating store */}
		return (

			<form>

				<h2>Choose a store</h2>
				<input type="text" ref="storeId" required />
				<input type="submit" />
			</form>
		)
	}
});

/* 404 page */

let NotFound = React.createClass({
	render: function() {
		return (
			<h1>Page Not Found, try kys</h1>
		)
	}
});

/* Routes */

let routes = (
	<Router history={createBrowserHistory()}>
		<Route path="/" component={StorePicker} />
		<Route path="/store/:storeId" component={App} />
		<Route path="*" component={NotFound} />
	</Router>
);


ReactDOM.render(routes, elem);