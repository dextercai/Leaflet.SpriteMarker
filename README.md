# Leaflet.SpriteMarker		
An extension to Leaflet that provide an enhanced markers creater		
# Explain		
We *CAN NOT* create the markers with a map file which contains several icons like that in Google Map APIs.
This extension will help to create it simplely.
# Example			
```
var MarkerOption = {
		url: 'example.png',
        size: {width:40, height:38},
        origin: {x:0, y:48},
        anchor: {x:20, y:18}
};
var SpriteMarker = L.Marker.SpriteMarker([0,0],MarkerOption);
SpriteMarker.setTo(map);
```

		