import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../ui/containers/AppContainer';
import RegisterGroupContainer from '../ui/containers/RegisterGroupContainer';
import ProfileContainer from '../ui/containers/ProfileContainer';

// pages
import SignupPage from '../ui/pages/SignupPage';
import LoginPage from '../ui/pages/LoginPage';

export const renderRoutes = () => (
    <Router>
        <div>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SignupPage}/>
            <Route path="/register-group" component={RegisterGroupContainer}/>
            <Route exact={true} path="/" component={AppContainer}/>
            <Route path="/profile" component={ProfileContainer}/>
        </div>
    </Router>
);