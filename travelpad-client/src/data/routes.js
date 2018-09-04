import React from 'react';
import {Route, Switch } from 'react-router-dom';


import App from '../App';
import TravelsPg from '../js/Travels/Travels-pg';
import Home from '../js/Index';
import SearchPg from '../js/Search';
import ErrorPage from '../js/404Error';
import PadPg from '../js/Travels/Pad-pg';
const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-travels" component={TravelsPg} />
            <Route exact path="/travel-list" component={SearchPg} />
            <Route exact path="/pad-pg" component={PadPg} />
            <Route component={ErrorPage} />


        </Switch>

    </App>;


export default AppRoutes;