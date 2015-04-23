	////////////////////////////////////////////////////////////
	// GOOGLE MAPS
	///////////////////////////////////////////////////////////

	function initialize() {

		var mapOptions = {
			zoom: 10,
			center: new google.maps.LatLng(48.8421607,2, -2.3994408,13)
		}
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var myLatLng = new google.maps.LatLng(48.8421607,2, -2.3994408,13);
		var hotelMarker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'Your Hotel'
		});

		var myPoint1 = new google.maps.LatLng(48.7421607,2, -2.3994405,13);
		var hotelPoint = new google.maps.Marker({
			position: myPoint1,
			map: map,
			title:'Nice Museum to visit'
		});

		var myPoint2 = new google.maps.LatLng(48.9421607,2, -2.3994405,13);
		var hotelPoint = new google.maps.Marker({
			position: myPoint2,
			map: map,
			title:'Amazing restaurant'
		});
	}


	google.maps.event.addDomListener(window, 'load', initialize);

	

// Set geolocation
function getLocation() {
	if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		///alert("Geolocation is not supported by this browser");
	}
};


function showPosition(pos) {
	console.log(pos.coords.latitude);
	console.log(pos.coords.longitude);
};


/*



window.fbAsyncInit = function() {
	FB.init({
		appId      : '677958412310321',
		xfbml      : true,
		version    : 'v2.3'
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



*/