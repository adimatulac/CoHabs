import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import ProfileNotesBoard from '../components/ProfileNotesBoard';
import AcceptedRequestsContainer from '../containers/AcceptedRequestsContainer';
import UserProfile from '../components/UserProfile';
import EventsAttendingContainer from '../containers/EventsAttendingContainer';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    render() {
        Meteor.subscribe('users');
        let currentUser = this.props.currentUser;
        let userDataAvailable = (currentUser !== undefined);
        let loggedIn = (currentUser && userDataAvailable);
        if (loggedIn) {
            return (
                <Grid celled='internally' stackable>
                    <Grid.Column width={12}>
                        <ProfileNotesBoard />
                        <Divider />
                        <AcceptedRequestsContainer />
                        <Divider />
                        <EventsAttendingContainer />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <UserProfile />
                    </Grid.Column>
                </Grid>
            );
        } else {
            return (
                <div>
                    oops
                </div>
            );
        }
    }
}