import React from 'react';
import { withHistory } from 'react-router-dom';
import MainContainer from './MainContainer';
import { Meteor } from 'meteor/meteor';
import MenuBar from '../components/MenuBar';
import MenuBarContainer from './MenuBarContainer';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getMeteorData();
        this.logout = this.logout.bind(this);
    }

    getMeteorData() {
        return {
            isAuthenticated: Meteor.userId() !== null
        };
    }

    componentWillMount() {
        if (!this.state.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    logout(e) {
        e.preventDefault();
        Meteor.logout( (err) => {
            if (err) {
                console.log(err.reason);
            } else {
                this.props.history.push('/login');
            }
        });
    }

    render() {
        return (
            <div>
                <MenuBarContainer onLogout={this.logout} />
                <MainContainer />
            </div>
        );
    }
}