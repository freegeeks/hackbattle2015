var React = require('react');

var GeoDistance = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			'point1.latitude': 52.3532884,
			'point1.longitude': 4.8407814,
			'point2.latitude': 52.3865138,
			'point2.longitude': 4.8697248
		};
	},
	componentDidMount: function() {
		Geodata.retrieve(function(geodata) {
			this.setState({
				'point1.latitude': geodata.coordinates.latitude,
				'point1.longitude': geodata.coordinates.longitude
			});
		}.bind(this));
	},
	getGeodata: function(state) {
		return new Geodata({
			latitude: parseFloat(this.state[state + '.latitude'], 10),
			longitude: parseFloat(this.state[state + '.longitude'], 10)
		});
	},
	calculateDistance: function(point1, point2) {
		return point1.distance(point2);
	},
	render: function() {
		return (
			<form>
				<div>
					Point 1:
					<input type="text" valueLink={this.linkState('point1.latitude')} />
					<input type="text" valueLink={this.linkState('point1.longitude')} />
				</div>
				<div>
					Point 2:
					<input type="text" valueLink={this.linkState('point2.latitude')} />
					<input type="text" valueLink={this.linkState('point2.longitude')} />
				</div>
				<div>Distance: {this.calculateDistance(this.getGeodata('point1'), this.getGeodata('point2'))}</div>
			</form>
		);
	}
});

module.exports = GeoDistance;
