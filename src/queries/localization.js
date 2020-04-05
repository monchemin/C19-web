import {default as axios} from 'axios';
import Config from "../configurations";

const API = Config.API_HOST + "/position";

export function fetchCountries() {
    return new Promise(callBack => {
        axios.get(API + "/countries")
            .then(result => callBack(result))
            .catch(error => console.log(error))
    })
}

export function fetchTowns() {
    return new Promise(callBack => {
        axios.get(API + "/countries")
            .then(result => callBack(result))
            .catch(error => console.log(error))
    })
}
