import axios from "axios";
import apiUrl from "./apiConfig";

export const getAllMosques = () => {
    console.log('Nader from the mosques function')

    return axios({
        method: 'get',
        url: apiUrl + `/mosques`,
    })
    //.then(res => res.data)
        .catch(err => console.log(err))
}
export const getLocation = () => {
    return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                    resolve({
                        zoom : 15,
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                        approximate: false
                    });
                    //console.log(pos)
                    console.log('Nader returned location')
                },
                () => {
                    alert(' to fully leverage our website, please allow access to your location')
                    resolve(fetch('https://ipapi.co/json')
                        .then(res => res.json())

                        .then(loc => {
                            return {
                                zoom : 12,
                                lat: loc.latitude,
                                lng: loc.longitude,
                                approximate: true

                            };
                        }))

                    console.log('Nader failed to return location')
                })
        }
    )
}

export const validateForm = (form) => {
    if (form.mosque.name !== "" && form.mosque.city !== "" && form.mosque.desc !==""
        && form.mosque.region !=="") {
        return true
    }
    else {
        return false
    }
}

export const handleForm = (data , user) => {
    axios ({
        method : 'post',
        url : apiUrl + '/mosques/add',
        headers: {
            'Authorization': `Bearer ${user.token}` // FOR EXPRESS
        },
        data : data
    })
        .then(res => console.log("successfully posted data" + res))
        .catch(err=> console.log(err))
}

export const getByUser = (user) => {
    console.log('Mosques for user')

    return axios({
        method: 'get',
        url: apiUrl + `/by_user/${user._id}`,
        headers: {
            'Authorization': `Bearer ${user.token}` // FOR EXPRESS
        }
    })
    //.then(res => res.data)
        .catch(err => console.log(err))
}

export const getByUserId = (user) => {
    console.log('Mosques for user')

    return axios({
        method: 'get',
        url: apiUrl + `/user_id/${user._id}`,
    })
        .catch(err => console.log(err))
}





