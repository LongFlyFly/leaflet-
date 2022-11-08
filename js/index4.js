var map = L.map('map').setView([39.5427, 116.2317], 13);
L.tileLayer('http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}', {
    attribution: ''
}).addTo(map);

var parisKievLL = [
    [39.5427, 116.2317],
    [39.9, 116.17]
];

// 第一个圈
var circle = L.circle([39.5427,116.2317], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500000
 }).addTo(map);

// var latlngs = [[40.3227,117.217],[35.3227,117.217],[39.5427,116.2317],[40.3227,114.1217],[37.3427,115.2317], [38.1227, 118.2317]]
// var polygon = L.polygon(latlngs, {color: '#000eff',fillColor:'#0000ed',
//               weight:1}).addTo(map);



var londonParisRomeBerlinBucarest = [
    [39.5427,116.2317],
    [38.9927, 116.2317],
    [39.3427, 117.0017],
    [38.1227, 118.0217],
    [39.3227, 117.2317]
];
var londonBrusselFrankfurtAmsterdamLondon = [
    [39.5427, 116.2317],
    [38.9927, 116.237],
    [37.3427, 115.2317],
    [38.1227, 116.2317],
    [35.3227, 117.217]
];
var barcelonePerpignanPauBordeauxMarseilleMonaco = [
    [39.5427, 116.2317],
    [38.9927, 115.2317],
    [39.3427, 116.27],
    [38.1227, 118.2317],
    [40.3227, 117.217]
];

var barcelonePerpignanPauBordeauxMarseilleMonaco2 = [
    [39.5427, 116.2317],
    [38.9927, 117.2317],
    [39.7427, 117.0237],
    [38.1227, 116.217],
    [39.3227, 118.1217]
];

var barcelonePerpignanPauBordeauxMarseilleMonaco3 = [
    [39.5427, 116.2317],
    [38.9927, 117.5317],
    [39.3427, 117.0237],
    [38.1227, 116.217],
    [40.3227, 114.1217]
];


var barcelonePerpignanPauBordeauxMarseilleMonaco4 = [
    [40.3227, 114.1217],
    [36.9927, 114.5317],
    [37.3427, 116.0237],
    [38.1227, 113.217],
    [41.5427, 116.2317]
];

map.fitBounds(londonParisRomeBerlinBucarest);

var marker1 = L.Marker.movingMarker(
    londonBrusselFrankfurtAmsterdamLondon,
    10000, {
        autostart: true
    }).addTo(map);

    setTimeout(function () {
        marker1.addStation(1, 2000);
        marker1.addStation(2, 2000);
        marker1.addStation(3, 2000);
        marker1.addStation(4, 2000);
    }, 2000);
   

L.polyline(londonBrusselFrankfurtAmsterdamLondon, {
    color: 'blue'
}).addTo(map);



var marker5 = L.Marker.movingMarker(
    barcelonePerpignanPauBordeauxMarseilleMonaco,
    10000, {
        autostart: true
    }).addTo(map);

        marker5.addStation(1, 2000);
        marker5.addStation(2, 2000);
        marker5.addStation(3, 2000);
        marker5.addStation(4, 2000);

L.polyline(barcelonePerpignanPauBordeauxMarseilleMonaco, {
    color: 'green'
}).addTo(map);


var marker6 = L.Marker.movingMarker(
    barcelonePerpignanPauBordeauxMarseilleMonaco2,
    10000, {
        autostart: true
    }).addTo(map);

marker6.addStation(1, 2000);
marker6.addStation(2, 2000);
marker6.addStation(3, 2000);
marker6.addStation(4, 2000);

L.polyline(barcelonePerpignanPauBordeauxMarseilleMonaco2, {
    color: 'yellow'
}).addTo(map);


var marker7 = L.Marker.movingMarker(
    barcelonePerpignanPauBordeauxMarseilleMonaco3,
    10000, {
        autostart: true
    }).addTo(map);

marker7.addStation(1, 2000);
marker7.addStation(2, 2000);
marker7.addStation(3, 2000);
marker7.addStation(4, 2000);

L.polyline(barcelonePerpignanPauBordeauxMarseilleMonaco3, {
    color: 'pink'
}).addTo(map);


var marker8 = L.Marker.movingMarker(
    barcelonePerpignanPauBordeauxMarseilleMonaco4,
    10000, {
        autostart: true
    }).addTo(map);

marker8.addStation(1, 2000);
marker8.addStation(2, 2000);
marker8.addStation(3, 2000);
marker8.addStation(4, 2000);

L.polyline(barcelonePerpignanPauBordeauxMarseilleMonaco4, {
    color: 'red'
}).addTo(map);