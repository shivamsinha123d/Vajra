// Create Map

const map = L.map('map').setView([20.5937,78.9629],5);

// OpenStreetMap Tiles

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:'© OpenStreetMap'
}).addTo(map);

// User Location

navigator.geolocation.getCurrentPosition(position=>{

    const lat=position.coords.latitude;
    const lng=position.coords.longitude;

    map.setView([lat,lng],14);

    L.marker([lat,lng])

    .addTo(map)

    .bindPopup("📍 You are here")

    .openPopup();

});