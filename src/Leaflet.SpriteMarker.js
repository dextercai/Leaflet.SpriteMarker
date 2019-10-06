L.Marker.SpriteMarker = L.Marker.extend({
    initialize: function(position, icon) { // (LatLng, Object)
		var divIcon = L.divIcon({
			html: '<div style="background:url(' + icon.url + ') no-repeat; background-position:-' + icon.origin.x + 'px -' + icon.origin.y + 'px ;width: ' + icon.size.width + 'px;height: ' + icon.size.height + 'px;margin-left:-' + icon.anchor.x + 'px;margin-top:-' + icon.anchor.y + 'px;"></div>'
		});
		var options = {
			icon: divIcon
		};
        L.Marker.prototype.initialize.call(this, position, options);
    }
});

L.Marker.SpriteMarker = function(position, icon) {
    return new L.Marker.SpriteMarker(position, icon);
};