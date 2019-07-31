import L from 'leaflet';
import theirs from "./images/pin (2).png";
import mine from './images/pin (1).png'

export const theirCont = L.icon({
    iconUrl: theirs ,
    iconSize: [34, 34],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
})
export const marker = L.icon({
    iconUrl: require('./marker.png'),
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
});
export const myCont = L.icon({
    iconUrl: mine,
    iconSize: [34, 34],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
})
