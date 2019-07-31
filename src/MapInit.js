import React from 'react';
import 'leaflet/dist/leaflet.css'
import {getLocation, validateForm, handleForm} from "./api";
import Map2 from './Map2';
import FormCard from "./FormCard";
import axios from 'axios'

class MapInit extends React.Component {
    state = {
        user: this.props.user,
        approximate: false,
        isSending: false,
        validForm: false,
        isSent: false,
        mosques: [],
        info: {
            coords: {
                lat: 0,
                lng: 0
            },
            name: '',
            desc: '',
            city: '',
            region: '',
            hasJum: false,
        },
        zoom: 2
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://ipapi.co/json'
        })
            .then(res => {
                const copyInfo = Object.assign(this.state.info)
                copyInfo.city = res.data.city
                copyInfo.region = res.data.region
                this.setState({
                        info: copyInfo
                    }
                )
            })
        getLocation()

            .then(res => {
                const copyInfo = Object.assign(this.state.info)
                //console.log(res)
                copyInfo.coords.lat = res.lat
                copyInfo.coords.lng = res.lng
                this.setState({
                    info: copyInfo,
                    userPermitted: true,
                    zoom: res.zoom,
                    approximate: res.approximate

                })
                console.log('After' + this.state.info.coords.lat)
            })
            .catch(e => console.log(e))
        console.log("info", this.state.info)
    }

    handleChange = (event) => {

        this.setState({
            info: {
                ...this.state.info,
                [event.target.name]: event.target.value
            },
            [event.target.name]: event.target.value,

        })
        console.log(this.state.info)
        // console.log(this.state.info.desc)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            mosque: {
                name: this.state.info.name,
                desc: this.state.info.desc,
                coords: {
                    x: this.state.info.coords.lat,
                    y: this.state.info.coords.lng,
                },
                city: this.state.info.city,
                region: this.state.info.region,
                hasJum: this.state.info.hasJum
            }
        }
        this.setState({
            isSending: true,
            form: false
        })

        if (validateForm(data)) {


            handleForm(data, this.state.user)
            console.log(this.state)

            setTimeout(() => this.setState({
                validForm: true,
                isSending: false,
                isSent: true
            }), 3000)
        } else {
            alert("Invalid form submission. All fields are required")
        }
    }
    handleRadio = (val) => {
        let copyInfo = Object.assign(this.state.info)


        if (val) {
            copyInfo.hasJum = false;
            this.setState({
                info: copyInfo
            })
        } else {
            copyInfo.hasJum = true;
            this.setState({
                info: copyInfo
            })
        }
    }
    clearForm = () => {
        let copyInfo = Object.assign(this.state.info)
        copyInfo.name = '';
        copyInfo.desc = '';
        copyInfo.hasJum = false
        this.setState({
            info: copyInfo
        })
    }

    render() {
        return (
            <div>
                <Map2 lat={this.state.info.coords.lat}
                      lng={this.state.info.coords.lng}
                      zoom={this.state.zoom}
                      user={this.state.user}
                      appr={this.state.approximate}
                />
                {this.state.user && this.state.approximate ?
                    <h3>To ensure accuracy, We need Location services before you add a mosque</h3>
                    :
                    ''
                }
                {this.state.user && !this.state.approximate && !this.state.isSent ?
                    <FormCard
                        isSending={this.state.isSending}
                        info={this.state.info}
                        isSent={this.state.isSent}
                        handleRadio={this.handleRadio}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        clearForm={this.clearForm}
                        approximate={this.state.approximate}
                    />
                    : ''
                }

            </div>
        );
    }
}

export default MapInit
