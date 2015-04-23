var ProductSearch = React.createClass({
	getInitialState: function() {
		return {
			geolocation: new Geodata({
				latitude: 52.3532884,
				longitude: 4.8407814
			})
		};
	},

	componentWillMount: function() {
		Geodata.retrieve(function(geodata) {
			this.setState({
				geolocation: geodata
			});
		}.bind(this));
	},

	render: function() {
		return (
			<div>
				<section class="maps">
					<div class="location_options">
						<span class="current_location">Dam Square, Amsterdam</span>
						<span class="my_location">My location</span>
					</div>
					<div id="map-canvas"></div>
				</section>

				<section class="search">
					<input type="text" placeholder="SEARCH for products" />
				</section>

				<section class="product_list">
					<ProductList byDistance={this.state.geolocation} />
				</section>
			</div>
		);
	}
});