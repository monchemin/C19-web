import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import {initStore} from "./models/store";

const store = initStore();

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<Root/>, document.querySelector("#root"));
