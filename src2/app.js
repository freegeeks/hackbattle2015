
var React = require('react');


var ProductSearch = require('./components/productSearch');
var ProductSend = require('./components/productSend');
var ProductList = require('./components/productList');
var GeoDistance = require('./components/geodistance');


React.render(
	<ProductSearch />,
	document.getElementById('container')
	);

React.render(
	<ProductSend />,
	document.getElementById('modal')
	);

React.render(
	<ProductList />,
	document.getElementById('modal')
	);

React.render(
	<GeoDistance />,
	document.getElementById('modal')
	);