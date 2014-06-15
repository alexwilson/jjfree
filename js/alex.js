var Alex = window.Alex || {};

Alex.clock = {

    // Define now.
    now: false,
	regex: false,

    init: function() {

		// Set the regex we use for time.
        this.regex = /(\d+:\d+:\d+).*/;

        // Call our update function.
        this.update();

    },

    update: function() {

        // Fetch current date.
        this.now = new Date();

        // Format our clock.
        $(".clock").text(
        	this.now.toTimeString().replace(
        		this.regex, "$1"
        	)
        );

        // Update twice every second.
        setTimeout(function() {
            Alex.clock.update()
        }, 500);

    }
}

Alex.gallery = {

	key: false,
	endpoint: false,
	method: false,
	format: false,
	per_page: false,
	page: false,
	container: false,
	baseUrl: false,

	init: function() {
		this.container = $('#links');
		if (this.container.length > 0) {
				this.endpoint = '//api.flickr.com/services/rest/';
				this.key = '7617adae70159d09ba78cfec73c13be3';
				this.method = 'flickr.interestingness.getList';
				this.format = 'json';
				this.per_page = 100;
				this.page = 1;
				this.populate();
		}
	},

	populate: function() {
		$.ajax({
		    url: this.endpoint,
		    data: {
		        format: this.format,
		        method: this.method,
		        api_key: this.key,
		        per_page: this.per_page,
		        page: this.page,
		    },
		    dataType: 'jsonp',
		    jsonp: 'jsoncallback'
		}).done(function(result) {
		    $.each(result.photos.photo, function(index, photo) {
		        this.baseUrl = '//farm' + photo.farm + '.static.flickr.com/' +
		            photo.server + '/' + photo.id + '_' + photo.secret;
		        $('<a/>')
		            .append($('<img>').prop('src', this.baseUrl + '_s.jpg'))
		            .prop('href', this.baseUrl + '_b.jpg')
		            .prop('title', photo.title)
		            .attr('data-gallery', '')
		            .appendTo(Alex.gallery.container);
		    });
		});
	}
}

Alex.map = {

	style: false,
	zoom: false,
	mapOptions: false,
	map: false,
	script: false,

	init: function() {

		this.container = $(".google-map-placeholder");

		if (this.container.length > 0) {
			this.style = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
			this.zoom = 15;
			this.lat = 0;
			this.long = 0;

			this.loadGoogleMaps();
		}

	},

	loadGoogleMaps: function() {



		if (this.script == false) {

		    this.script = document.createElement('script');
		    this.script.src = '//maps.googleapis.com/maps/api/js'
		    +	'?callback=Alex.map.createMap';
		    this.script.type = "text/javascript";
		    this.script.id = 'gmaps-script';
		    document.body.appendChild(this.script);

		} else {

			this.createMap();

		}

	},

	createMap: function() {

		this.mapOptions = {
		    zoom: this.zoom,
		    center: new google.maps.LatLng(this.lat, this.long),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    styles: this.style
		};

		google.maps.event.addDomListener(window, 'load', function() {
			console.log("aaa");
			Alex.map.map = new google.maps.Map(document.getElementById('map'), Alex.map.mapOptions);
		});

	}

}


$(document).ready(function() {
    Alex.clock.init();
    Alex.gallery.init();
});