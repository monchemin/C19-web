import { init } from '@rematch/core'
import {localizationModel} from './localization'

const store = init({
    localization: localizationModel,
})

export default store