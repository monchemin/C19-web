import React from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from "react-router-dom";
import LoginScreen from "../screens/loginScreen";
import DashboardScreen from "../screens/dashboardScreen";
import RiskListScreen from "../screens/riskScreen";
import NavigationBar from "./navbar";
import PresentationScreen from "../screens/presentationScreen";
import AllListScreen from "../screens/allScreen";
import LogoutScreen from "../screens/logoutScreen";


export const  ApplicationRoutes = () => (
    <Router>
        <NavigationBar/>
        <switch>
            <Route exact path='/' component={PresentationScreen} />
            <PrivateRoute  path='/risk' component={RiskListScreen} />
            <PrivateRoute  path='/all' component={AllListScreen} />
            <Route  path='/logout' component={LogoutScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/presentation" component={PresentationScreen} />
        </switch>
    </Router>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);