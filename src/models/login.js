import {createModel} from "@rematch/core";
import {login} from "../queries/login";

export const LoginModel = () =>
    createModel({
    state: {
        redirect: false,
        error: {"code":false, "message": ""},
    },
    reducers: {
        cancelForm(state, ok) {
            return { ...state, redirect: ok }
        },
        password(state, password) {
            return { ...state, password }
        },

    },

    effects: dispatch => ({
        async postLogin(data, payload) {
            dispatch.login.cancelForm(false);
            try {
                await login(data)
                    .then(result => {
                        console.log(result);
                        localStorage.setItem("user", result.data.response.Token);
                        dispatch.login.cancelForm(true);
                    })
            }
                catch(err) {console.log(err)};
        }
    })
});
