import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// containers
import AppContainer from '../ui/containers/AppContainer';
// import MainContainer from '../ui/containers/MainContainer';

// pages
import SignupPage from '../ui/pages/SignupPage';
import LoginPage from '../ui/pages/LoginPage';

const history = createBrowserHistory();

export const renderRoutes = () => (
    <Router>
        <div>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignupPage}/>
            <Route exact={true} path="/" component={AppContainer}/>
        </div>
    </Router>
);