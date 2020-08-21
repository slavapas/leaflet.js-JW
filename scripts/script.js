var map = L.map('map');

       


// [{
//         "type": "Feature",
//         "properties": {
//             "Name": "БРА - Бездитко Иванна Игоревна",                    
//             "Address":"бул. Нестерова 18, кор. 1, кв. 28"
//         },"geometry": {"type": "Point","coordinates": [34.55519914627075,49.59290945425261]}
//     },
//     {
//         "type": "Feature",
//         "properties": {
//             "Name": "Yishun Community Hospital",                    
//             "Address":"My Address 2"
//         },
//         "geometry": {
//             "type": "Point",
//             "coordinates": [34.6551991427075,49.6929095425261]
//         }
//     }

// ];


function onEachFeature(feature, layer) {
    var popupContent = "<b>Имя: </b> " + feature.properties.Name + "</br><b>Адресс: </b>" + feature.properties.Address + "</br><b>Город: </b>" + feature.properties.City + "</br><b>Собрание: </b>" + feature.properties.Congregation+ "</br><b>Телефон: </b>" + feature.properties.Tel;

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
}


map.setView([49.59290945425261, 34.55519914627075], 11);

mapLink =
'<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
    }).addTo(map);


L.geoJson(hospitals, {
    onEachFeature: onEachFeature
}).addTo(map);