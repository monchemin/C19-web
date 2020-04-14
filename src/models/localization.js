import {fetchCountries} from "../queries/localization";
import {createModel} from "@rematch/core";

export const LocalizationModel = () =>
createModel(
{
    state: {
        countries: [],
        towns: [],
        districts: []
    },
    reducers: {
        updateCountries(state, countries) {
          return {...state, countries: countries}
        },
    },

    effects: dispatch => ({
        async loadCountries(payload, rootState) {
            await fetchCountries()
                .then(result => dispatch.updateCountries(result))
        }
    })
});