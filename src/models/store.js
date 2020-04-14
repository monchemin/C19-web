import {init} from "@rematch/core";
import {initModels} from "./index";

export const initStore = () =>
    init({
        models: initModels()
    });