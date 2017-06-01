let React = require('react');
let ReactDOM = require('react-dom');

let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let Navigation = ReactRouter.Navigation;
let History = ReactRouter.History;

let createBrowserHistory = require('history/lib/createBrowserHistory');
let littleHelp = require('./helpers');

let elem = document.querySelector('main');

/* Main app */

let App = React.createClass({
		
		getInitialState: function() {
			return {
				fishes: {},
				order: {}
			}
		},
		
		addFish: function(fish) {
			let timestamp = (new Date()).getTime();
			this.state.fishes["fish-" + timestamp] = fish;
			this.setState({ fishes : this.state.fishes });
		},

		render: function() {
			return (
				<div className="catch-of-the-day">
					<div className="menu">
						<Header tagline="Fresh Seafood Market" />
					</div>
					<Order/>
					<Inventory addFish={this.addFish}/>
				</div>

			)
		}
});

/* Header */

let Header = React.createClass({

		render: function() {
			return (
				<header className="top">
					<h1>Catch
						<span className="ofThe">
							<span className="of">of</span>
							<span className="the">the</span>
						</span>
						Day</h1>
					<h3 className="tagline"><span>{this.props.tagline}</span></h3>
				</header>
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
				<div>
					<h2>Inventory</h2>
					<AddFishForm {...this.props}/>
				</div>
				)
		}
});

/* Add fish form 
<AddFishForm/>
*/

let AddFishForm = React.createClass({
	createFish: function(event) {
		event.preventDefault();
		let fish = {
			name: this.refs.name.value,
			price: this.refs.price.value,
			status: this.refs.status.value,
			desc: this.refs.desc.value,
			image: this.refs.image.value,
		};

		this.props.addFish(fish);
		this.refs.fishForm.reset();
	},

	render: function() {
		return (
			
			<form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
				<input type="text" ref="name" placeholder="Fish Name"/>
				<input type="text" ref="price" placeholder="Fish Price"/>
				<select ref="status">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea type="text" ref="desc" placeholder="Description"></textarea>
				<input type="text" ref="image" placeholder="URL to image"/>
				<button type="submit">+ Add item</button>
			</form>
		)
	}
});

/* <StorePicker/> */
let StorePicker = React.createClass({
	mixins : [History],
	goToStore: function(event) {
		let storeId = littleHelp.clearingText(this.refs.storeId.value);
		event.preventDefault();
		
		this.history.pushState(null, '/store/'+storeId);

	},

	render: function() {
		{/* creating store */}
		return (

			<form className="store-selector" onSubmit={this.goToStore}>

				<h2>Choose a store</h2>
				<input type="text" ref="storeId" defaultValue={littleHelp.randomText()} required />
				<input type="Submit" />
			</form>
		)
	}
});

/* 404 page */

let NotFound = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Page Not Found, try kys</h1>
			</div>
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