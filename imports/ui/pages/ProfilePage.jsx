import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProfileNotesBoard from '../components/ProfileNotesBoard';
import AcceptedRequestsContainer from '../containers/AcceptedRequestsContainer';

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
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <AcceptedRequestsContainer />
                    </Grid.Column>
                </Grid>
            );
        } else {
            return (
                <div>"hello"</div>
            );
        }
    }
}