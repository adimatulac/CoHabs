import React from 'react';
import { Container, Grid, Message, Card, Divider } from 'semantic-ui-react';
import UserProfileHeader from './UserProfileHeader';
import UserProfileInfo from './UserProfileInfo';
import GroupBoard from './GroupBoard';

export default class UserProfile extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <UserProfileHeader />
                <UserProfileInfo />
                <Divider style={{ paddingTop: '20px' }} />
                <GroupBoard />
            </Container>
        );
    }
}