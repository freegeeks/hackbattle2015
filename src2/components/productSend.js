var React = require('react');


var ProductSend = React.createClass({
	mixins: [React.addons.LinkedStateMixin],


	getInitialState: function() {
		return {
			'name': null,
			'price': null,

			geolocation: new Geodata({
				latitude: 52.3532884,
				longitude: 4.8407814
			}),

			'modalClass':"hide"
		};
	},

	handleSubmit: function (e) {
		e.preventDefault();
		this.saveImg();
	},


	handleClick: function(event) {
		this.setState({
			modalClass: "hide"
		});

	},

	saveImg: function() {

		var files = this.refs.files.getDOMNode().files;

		if (files.length == 0) {
			alert("Please select a photo");
			return false
		}

		var reader = new FileReader();
		var name = this.state.name;
		var price = this.state.price;
		var coordinates = this.state.geolocation.coordinates;

		// Closure to capture the file information.
		reader.onload = (function(theFile) {
		return function(e) {

			var firebaseRef = new Firebase('https://hackbattle2015.firebaseio.com/products/');
			firebaseRef.push({
				"coordinates": 	coordinates,
				"name": 		name,
				"price": 		price,
				"image": 		e.target.result
			});

			alert("Product Submited!");

		};
		})(files[0]);

		// Read in the image file as a data URL.
		reader.readAsDataURL(files[0]);
	},



	render: function() {
		return (
			<div id="modal_base" className={this.state.modalClass}>
			<form className="send_product" onSubmit={this.handleSubmit} id="form">
				<span className="close_product orange" onClick={this.handleClick}>x</span>
				<label><input type="text" placeholder="Name" valueLink={this.linkState('name')} /></label>
				<label><input type="text" placeholder="Price" valueLink={this.linkState('price')}/></label>
				<label><input type="file" id="files" name="file[]" ref="files" /></label>
				<input type="submit" value="Send" label="sell" className="btn_send orange" />
			</form>
			</div>
			);
	}
});

module.exports = ProductSend;
