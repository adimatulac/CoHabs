import React from 'react';
import { Container, Card, Icon, Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';

export default class UserProfileInfo extends React.Component {
    render() {
        return (
            <Container style={{ paddingTop: '70px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }}>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            { Meteor.user().profile.fname + ' ' + Meteor.user().profile.lname }
                        </Card.Header>
                        <Card.Meta>
                            @{ Meteor.user().username }
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Description>
                            <div style={{ paddingTop: '10px' }}>
                                <Icon name='phone' size='large' color='grey' />
                                { Meteor.user().profile.phone !== undefined ? Meteor.user().profile.phone : 'Enter a phone number' }
                            </div>
                            <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <Icon name='mail' size='large' color='grey' />
                                { Meteor.user().profile.email !== undefined ? Meteor.user().profile.email : 'Enter an email address' }
                            </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Container>
        );
    }
}