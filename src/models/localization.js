import {fetchCountries} from "../queries/localization";

export const localizationModel = {
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
}