var ProductList = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState: function() {
		return {
			products: []
		};
	},

	componentWillMount: function() {
		var firebaseRef = new Firebase('https://hackbattle2015.firebaseio.com/products/');
		var products = firebaseRef.limitToLast(25);

		this.bindAsArray(products, 'products');
	},

	calculateDistance: function(coordinates) {
		var geodata = new Geodata(coordinates);
		return geodata.distance(this.props.byDistance);
	},

	displayDistance: function(coordinates) {
		if (typeof this.props.byDistance === 'undefined') {
			return;
		}

		var distance = this.calculateDistance(coordinates);
		return this.convertDistance(distance);
	},

	convertDistance: function(meters) {
		if (meters < 1000) {
			return meters.toFixed(0) + ' meters';
		} else {
			var kilometers = meters / 1000;
			return kilometers.toFixed(1) + ' km';
		}
	},

	displayItem: function(item, index) {
		return (
			<li className="product">
				<img className="image" src={item.image} />
				<div className="title">{item.name}</div>
				<div className="price">{item.price}</div>
				<div className="distance">{this.displayDistance(item.geodata)}</div>
				<div className="buy">buy</div>
			</li>
		);
	},

	displayList: function(products) {
		var items = _.sortBy(products, function(item) {
			var distance = this.calculateDistance(item.geodata);
			return distance;
		}.bind(this));

		return items.map(this.displayItem);
	},

	render: function() {
		return (
			<ul>{this.displayList(this.state.products)}</ul>
		);
	}
});