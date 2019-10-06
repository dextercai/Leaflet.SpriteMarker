# Leaflet.SpriteMarker    

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