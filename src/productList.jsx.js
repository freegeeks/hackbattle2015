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
			<li class="product">
				<img class="image" src={item.image} />
				<div class="title">{item.name}</div>
				<div class="price">{item.price}</div>
				<div class="distance">2km</div>
				<div class="buy">buy</div>
			</li>
		);
	},

	render: function() {
		return (
			<ul>{ this.state.products.map(this.listItem) }</ul>
		);
	}
});