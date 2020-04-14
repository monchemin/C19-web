import React from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from "react-router-dom";
import LoginScreen from "../screens/loginScreen";
import DashboardScreen from "../screens/dashboardScreen";
import RiskListScreen from "../screens/riskScreen";


export const  ApplicationRoutes = () => (
    <Router>
        <div>
            <PrivateRoute exact path='/' component={DashboardScreen} />
            <PrivateRoute  path='/risk' component={RiskListScreen} />
            <Route path="/login" component={LoginScreen} />
        </div>
    </Router>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);