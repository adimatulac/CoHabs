import React from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuBar from '../components/MenuBar';
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
        let currentUser = this.props.currentUser;
        let userDataAvailable = (currentUser !== undefined);
        let loggedIn = (currentUser && userDataAvailable);
        console.log('current user: ' + JSON.stringify(this.props.currentUser));
        return (
            <Grid celled='internally' stackable>
                <Grid.Column width={11}>
                    <NotesBoard />
                </Grid.Column>
                <Grid.Column width={5}>
                    <BillsBoard />
                </Grid.Column>
            </Grid>
        );
    }
}

// MainDashboard.propTypes = {
//     username: React.PropTypes.string
// }