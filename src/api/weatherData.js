import axios from 'axios';

const host = 'http://apidev.accuweather.com/';
const apiKey = 'hoArfRosT1215';

export const getCityConditions = (cityName) => {
    return axios.get(`${host}locations/v1/search?q=${cityName}&apiKey=${apiKey}`)
        .then(response => {
        return axios.get(
            `${host}currentconditions/v1/${response.data[0].Key}.json?language=en&apiKey=${apiKey}`
        )
    }, error => {
            console.error(error)
        })
};