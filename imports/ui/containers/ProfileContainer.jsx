import React from 'react';
import { Meteor } from 'meteor/meteor';
import MenuBarContainer from './MenuBarContainer';
import ProfileInfoContainer from './ProfileInfoContainer';

export default class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getMeteorData();
        this.logout = this.logout.bind(this);
        this.redirectToDashboard = this.redirectToDashboard.bind(this);
        this.redirectToProfile = this.redirectToProfile.bind(this);
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

    redirectToDashboard(e) {
        e.preventDefault();
        this.props.history.push('/');
    }

    redirectToProfile(e) {
        e.preventDefault();
        this.props.history.push('/profile');
    }

    render() {
        return (
            <div>
                <MenuBarContainer onLogout={this.logout} onProfileRedirect={this.redirectToProfile} onDashboardRedirect={this.redirectToDashboard} />
                <ProfileInfoContainer />
            </div>
        );
    }
}