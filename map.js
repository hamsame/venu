// map
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtc2FlIiwiYSI6ImNrbDQ2cGZ0azByN3cycG1uY3dscDAyZ2IifQ.oOuAoU3DllXbkDHsFqoMfQ";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-0.0865, 51.504501],
  zoom: 12,
});

var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-0.0865, 51.504501],
      },
      properties: {
        title: "Mapbox",
        description: "London, UK.",
      },
    },
  ],
};

// add markers to map
geojson.features.forEach(function (marker) {
  // create a HTML element for each feature
  var el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
});
