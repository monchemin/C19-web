import {createModel} from "@rematch/core";
import {login} from "../queries/login";

export const LoginModel = () =>
    createModel({
    state: {
        redirect: false,
        isLoad: false,
        error: {"code":false, "message": ""},
    },
    reducers: {
        cancelForm(state, ok) {
            return { ...state, redirect: ok }
        },
        onLoad(state, ok) {
            return { ...state, isLoad: ok }
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
                        dispatch.login.isLoad(false);
                    })
            }
                catch(err) {console.log(err)};
        },
        async isLoad(ok, payload) {
            console.log("onload");
            dispatch.login.onLoad(ok);
        }
    })
});
