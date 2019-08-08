import React from 'react';
import { Container } from 'semantic-ui-react';
import GroupBoardHeader from './GroupBoardHeader';
import GroupList from './GroupList';
import GroupContainer from '../containers/GroupContainer';
import GroupHeaderContainer from '../containers/GroupHeaderContainer';

export default class GroupBoard extends React.Component {
    render() {
        // Meteor.subscribe('users');
        return (
            <Container style={{ marginTop: '14px' }}>
                <GroupHeaderContainer />
                <GroupContainer />
            </Container>
        );
    }
}