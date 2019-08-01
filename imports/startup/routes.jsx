import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../ui/containers/AppContainer';
import RegisterGroupContainer from '../ui/containers/RegisterGroupContainer';

// pages
import SignupPage from '../ui/pages/SignupPage';
import LoginPage from '../ui/pages/LoginPage';
import RegisterGroupPage from '../ui/pages/RegisterGroupPage';

export const renderRoutes = () => (
    <Router>
        <div>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignupPage}/>
            <Route path="/register-group" component={RegisterGroupContainer}/>
            <Route exact={true} path="/" component={AppContainer}/>
        </div>
    </Router>
);