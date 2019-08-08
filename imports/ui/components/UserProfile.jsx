import React from 'react';
import { Container, Grid, Message, Card } from 'semantic-ui-react';
import UserProfileHeader from './UserProfileHeader';
import UserProfileInfo from './UserProfileInfo';

export default class UserProfile extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <UserProfileHeader />
                <UserProfileInfo />
            </Container>
        );
    }
}