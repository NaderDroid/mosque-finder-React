import React from "react";
import 'leaflet/dist/leaflet.css'
import {Alert} from "reactstrap";
import {marker, myCont, theirCont} from "./icon";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import {getAllMosques, getByUserId} from "./api";


const style = {
    width: "100%",
    height: "576px"
};

class Map2 extends React.Component {
    state = {
        mosques: [],
        visible: true
    }
    onDismiss = () => {
        this.setState({ visible: false });
    }
    // L.marker([this.props.lat , this.props.lng], {icon : myCont}).addTo(this.map)
    // add marker
    //this.marker = L.marker(this.props.markerPosition).addTo(this.map);
    //L.popup(this.props.markerPosition , <p>This is me lol</p>).addTo(this.map)

    componentDidMount() {
        getAllMosques()
            .then(mosques => {
                this.setState({
                    mosques: mosques.data.mosques
                })
            })

            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {this.props.appr ?
                    <div>
                        <Alert color="secondary" isOpen={this.state.visible} toggle={this.onDismiss} fade={false}>
                            Your location is approximate! for better results, please allow location services
                        </Alert>
                    </div>
                    :
                    <div>
                        <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss} fade={false}>
                           Your location is accurate
                        </Alert>
                    </div>
                }
                <Map style={style} center={[this.props.lat, this.props.lng]}
                     zoom={this.props.zoom}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />

                    <Marker position={[this.props.lat, this.props.lng]} icon={marker}>
                        <Popup>
                            <span>This is your current location</span>
                        </Popup>
                    </Marker>
                    {this.state.mosques.map((mosque, index) =>
                        <div>

                            {this.props.user && this.props.user._id === mosque.owner ?
                                <Marker position={[mosque.coords.x, mosque.coords.y]}
                                        key={index}
                                        icon={myCont}>
                                    <Popup>
                                        Added by You<br/> you said '{mosque.desc}'
                                        <br/><a href={`http://maps.google.com.sa/maps?q=${mosque.coords.x},${mosque.coords.y}`} target={'_blank'}>Google direction</a>
                                    </Popup>
                                </Marker>
                                :
                                <Marker position={[mosque.coords.x, mosque.coords.y]}
                                        key={index}
                                        icon={theirCont}>
                                    <Popup>
                                        Mosque: {mosque.ownerName} <br/> Said '{mosque.desc}'
                                        <br/><a href={`http://maps.google.com.sa/maps?q=${mosque.coords.x},${mosque.coords.y}`} target={'_blank'}>Google direction</a>

                                    </Popup>
                                </Marker>
                            }
                        </div>
                    )}

                </Map>
            </div>
        )
    }
}

export default Map2;
