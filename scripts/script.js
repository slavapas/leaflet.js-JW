var map = L.map('map');

function onEachFeature(feature, layer) {
    var popupContent = "<b>Номер: </b>" + feature.properties.Nr + "</br><b>Имя: </b> " + feature.properties.Name + "</br><b>Адресс: </b>" + feature.properties.Address + "</br><b>Город: </b>" + feature.properties.City + "</br><b>Собрание: </b>" + feature.properties.Congregation+ "</br><b>Телефон: </b>" + feature.properties.Tel;

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}


map.setView([49.59290945425261, 34.55519914627075], 13);

mapLink =
'<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
    }).addTo(map);


L.geoJson(servants, {
    onEachFeature: onEachFeature
}).addTo(map);

// here the script where you can view the coordinates on map
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
