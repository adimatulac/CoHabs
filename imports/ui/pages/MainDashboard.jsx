import React from 'react';
import { Grid } from 'semantic-ui-react';
import NotesBoard from '../components/NotesBoard';
import GroupBoard from '../components/GroupBoard';
import PieChart from '../components/Pie Chart';
import BillsBoard from '../components/BillsBoard';

export default class MainDashboard extends React.Component {
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
                    <Grid.Column width={10}>
                        <NotesBoard />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <BillsBoard />
                        <GroupBoard />
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