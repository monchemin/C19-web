import {LocalizationModel} from './localization'
import {LoginModel} from './login'
import {ListModel} from './list'

export const initModels = () => {
    return {
        localization: LocalizationModel(),
        login: LoginModel(),
        list: ListModel(),
    };
};
