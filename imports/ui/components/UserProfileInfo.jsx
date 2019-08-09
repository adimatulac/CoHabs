import React from 'react';
import { Container, Card, Icon, Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';

export default class UserProfileInfo extends React.Component {
    render() {
        return (
            <Container style={{ paddingTop: '70px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }}>
                <Header as='h2'>
                    { Meteor.user().profile.fname + ' ' + Meteor.user().profile.lname }
                    <Header.Subheader>
                        @{ Meteor.user().username }
                    </Header.Subheader>
                </Header>
                <Header textAlign='left'>
                    <Header.Subheader>
                        <Icon name='phone' size='large' color='grey' />
                        { Meteor.user().profile.phone !== undefined ? Meteor.user().profile.phone : 'Enter a phone number' }
                    </Header.Subheader>
                </Header>
                <Header textAlign='left'>
                    <Header.Subheader>
                        <Icon name='mail' size='large' color='grey' />
                        { Meteor.user().profile.email !== undefined ? Meteor.user().profile.email : 'Enter an email address' }
                    </Header.Subheader>
                </Header>
            </Container>
        );
    }
}