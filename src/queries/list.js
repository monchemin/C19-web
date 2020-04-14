import {default as axios} from 'axios';
import Config from "../configurations";

const API = Config.API_HOST + "/admin";

export function all() {
    return new Promise(callBack => {
        axios.get(API + "/patient-list")
            .then(result => callBack(result))
            .catch(error => console.log(error))
    })
}
