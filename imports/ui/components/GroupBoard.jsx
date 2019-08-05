import React from 'react';
import { Container } from 'semantic-ui-react';
import GroupBoardHeader from './GroupBoardHeader';
import GroupList from './GroupList';

export default class GroupBoard extends React.Component {
    render() {
        // Meteor.subscribe('users');
        return (
            <Container style={{ marginTop: '14px' }}>
                <GroupBoardHeader />
                <GroupList />
            </Container>
        );
    }
}