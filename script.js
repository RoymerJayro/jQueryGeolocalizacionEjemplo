$(function() {
	if ("geolocation" in navigator){
		navigator.geolocation.getCurrentPosition(function(position){
			var Locs = [
			{
				lat: position.coords.latitude,
				lon: position.coords.longitude,
				title: 'Title A1',
				html: '<h3>Estoy aqui</h3>',
				icon: 'http://maps.google.com/mapfiles/markerA.png',
				animation: google.maps.Animation.DROP,
				zoom:14
			}
			];
			new Maplace({
				locations: Locs,
				listeners: {
					click: function(map, event) {
						var LocsA = [
						{
							lat: position.coords.latitude,
							lon: position.coords.longitude,
							title: 'Title A1',
							html: '<h3>Content A1</h3>',
							icon: 'http://maps.google.com/mapfiles/markerA.png',
							animation: google.maps.Animation.DROP
						},
						{
							lat: map.latLng.lat(),
							lon: map.latLng.lng(),
							title: 'Title B1',
							html: '<h3>Content B1</h3>',
							icon: 'http://maps.google.com/mapfiles/markerB.png',
							show_infowindow: false
						}
						];
						$("#gmap").css("display","none");
						new Maplace({
							locations: LocsA,
							map_div: '#gmap2',
							generate_controls: false,
							show_markers: false,
							type: 'directions',
							draggable: true,
							directions_panel: '#route',
							afterRoute: function(distance) {
								$('#km').text(': '+(distance/1000)+'km');
							},
						}).Load();
					}
				}
			}).Load();
		});
	}else{
		console.log("Geolocation no disponible!");
	}
});