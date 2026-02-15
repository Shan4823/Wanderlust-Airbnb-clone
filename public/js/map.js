// Set Mapbox access token
mapboxgl.accessToken = mapToken;

 
const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, 
    zoom: 7
});



// Add marker to map
new mapboxgl.Marker({ color:  '#fe424d' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</P>`))
    .addTo(map);
