var Geodata = function(coordinates) {
	this.coordinates = coordinates;
};

Geodata.prototype.toRadians = function(number) {
	return number * Math.PI / 180;
};

Geodata.prototype.distance = function(coordinates) {
	var R = 6371000; // metres
	var φ1 = this.toRadians(this.coordinates.latitude);
	var φ2 = this.toRadians(coordinates.latitude);
	var Δφ = this.toRadians(coordinates.latitude - this.coordinates.latitude);
	var Δλ = this.toRadians(coordinates.longitude - this.coordinates.longitude);

	var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
	        Math.cos(φ1) * Math.cos(φ2) *
	        Math.sin(Δλ/2) * Math.sin(Δλ/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	var d = R * c;

	return d;
};
