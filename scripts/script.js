var map = L.map('map').setView([39.74739, -105], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

// var baseballIcon = L.icon({
//     iconUrl: 'baseball-marker.png',
//     iconSize: [32, 37],
//     iconAnchor: [16, 37],
//     popupAnchor: [0, -28]
// });

// function onEachFeature(feature, layer) {
//     var popupContent = "<p>I started out as a GeoJSON " +
//             feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

//     if (feature.properties && feature.properties.popupContent) {
//         popupContent += feature.properties.popupContent;
//     }

//     layer.bindPopup(popupContent);
// }

L.geoJSON([bicycleRental, campus], {

    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    //onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

// L.geoJSON(freeBus, {


// }).addTo(map);

var coorsLayer = L.geoJSON(coorsField, {

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: baseballIcon});
    },

    onEachFeature: onEachFeature
}).addTo(map);
