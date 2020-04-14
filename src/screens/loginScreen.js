import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import '../css/common.css';
import {InputIcone, AlertError} from '../components/formComponents';

import useRematchDispatch from "../hooks/useRematchDispatch";

const LoginScreen = (props) => {
    const {postLogin} = useRematchDispatch(dispatch => ({
        postLogin: dispatch.login.postLogin,
    }));
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const error = useSelector(state => state.login.error);
    const redirect = useSelector(state => state.login.redirect);
    const { username, password } = inputs;
    const message = "error message";
    const { from } = props.location.state || { from: { pathname: "/" } };

    function onPropertyValueChange(property, value) {
        setInputs(inputs => ({ ...inputs, [property]: value }));
    }

    function handleClick() {
        setSubmitted(true);
        if (username && password) {
            let data = {
                "e_mail": username,
                "password":password
            };
            postLogin(data);
        }
    }

    return (
        <main>
            {redirect ? <Redirect to={from}/> :
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-facebook-square"/></span>
                            <span><i className="fab fa-google-plus-square"/></span>
                            <span><i className="fab fa-twitter-square"/></span>
                        </div>
                    </div>
                    <div className="card-body">
                        {error.code ? <AlertError message={error.message}/> : null }
                        <form>
                            <InputIcone value={username} type="text" id="username" labelName=""
                                        placeholder="username" onChange={(property, value) => {
                                onPropertyValueChange(property, value)
                            }}/>
                            <span className="space"/>
                            <InputIcone value={password} type="password" id="password" labelName=""
                                        placeholder="password" onChange={(property, value) => {
                                onPropertyValueChange(property, value)
                            }}/>

                            <div className="form-group">
                                <input type="button" value="Login" className="btn float-right login-btn"
                                       onClick={() => {
                                           handleClick()
                                       }}/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">

                        <div className="d-flex justify-content-center">
                            Forgot your password?
                        </div>
                    </div>

                </div>
            </div>
        </div> }
        </main>
    );
};


export default LoginScreen