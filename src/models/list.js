import {createModel} from "@rematch/core";
import {all} from "../queries/list";

export const ListModel = () =>
    createModel({
    state: {
        data: [],
        error: {"code":false, "message": ""},
    },
    reducers: {
        updateData(state, response) {
            return { ...state, data: response }
        },
        password(state, password) {
            return { ...state, password }
        },

    },

    effects: dispatch => ({
        async getList(risk, payload) {
            try {
                await all()
                    .then(result => {
                        if (risk) {
                           let res =  result.data.response.filter(x => x.is_at_risk === true);
                            dispatch.list.updateData(res);
                        } else {
                            dispatch.list.updateData(result.data.response);
                        }
                    })
            }
                catch(err) {console.log(err)};
        }
    })
});
