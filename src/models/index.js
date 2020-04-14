import {LocalizationModel} from './localization'
import {LoginModel} from './login'

export const initModels = () => {
    return {
        localization: LocalizationModel(),
        login: LoginModel(),
    };
};
