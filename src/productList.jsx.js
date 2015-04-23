var ProductList = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState: function() {
		return {
			products: []
		};
	},

	componentWillMount: function() {
		var firebaseRef = new Firebase('https://hackbattle2015.firebaseio.com/products/');
		this.bindAsArray(firebaseRef.limitToLast(25), 'products');
	},

	listItem: function(item, index) {
		return (
			<li className="product">
				<img className="image" src={item.image} />
				<div className="title">{item.name}</div>
				<div className="price">{item.price}</div>
				<div className="distance">2km</div>
				<div className="buy">buy</div>
			</li>
		);
	},

	render: function() {
		return (
			<ul>{ this.state.products.map(this.listItem) }</ul>
		);
	}
});