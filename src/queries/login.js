import {default as axios} from 'axios';
import Config from "../configurations";

const API = Config.API_HOST + "/admin";

export function login(data) {
    return new Promise(callBack => {
        axios.post(API + "/login", data)
            .then(result => callBack(result))
            .catch(error => console.log(error))
    })
}
