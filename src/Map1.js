// import React from "react";
// import 'leaflet/dist/leaflet.css'
// import L from "leaflet";
// import {Map , TileLayer , Marker , Popup} from 'react-leaflet'
//
//
// const myCont = L.icon({
//     iconUrl: require('./marker.png'),
//     iconSize: [25, 41],
//     iconAnchor: [12.5, 41],
//     popupAnchor: [0, -41]
// });
//
// const style = {
//     width: "500px",
//     height: "300px"
// };
//
// class Map1 extends React.Component {
//     componentDidMount() {
//         console.log('from the Map---> ' + this.props.lat)
//
//         this.map = L.map("map", {
//             center: [this.props.lat, this.props.lng],
//             zoom: 16,
//             layers: [
//                 L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
//                     attribution:
//                         '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 })
//             ]
//         })
//         L.marker([this.props.lat , this.props.lng], {icon : myCont}).addTo(this.map)
//         // add marker
//         //this.marker = L.marker(this.props.markerPosition).addTo(this.map);
//         //L.popup(this.props.markerPosition , <p>This is me lol</p>).addTo(this.map)
//     }
//     render() {
//         return (
//             <div id="map" style={style} />
//
//         )
//
//         ;
//     }
// }
//
// export default Map1;
