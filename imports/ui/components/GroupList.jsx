import React from 'react';
import { Container, Card, Message } from 'semantic-ui-react';
import User from './User';

export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
        this.state = [
            { _id: 1, username: 'angellid', firstname: 'Angelli', lastname: 'Dimatulac' },
            { _id: 2, username: 'jasonkimchi', firstname: 'Jason', lastname: 'Kim' },
            { _id: 3, username: 'hellojess', firstname: 'Jess', lastname: 'Huh' }
        ];
    }

    render() {
        if (this.state.length === 0) {
            return (
                <div style={{ width: '100%', padding: '40px' }}>
                    <Message style={{ width: '200px', margin: 'auto' }}>
                        No roomies yet &#x1F622;
                    </Message>
                </div>
            );
        } else {
            return (
                <Container style={{ marginTop: '14px' }}>
                    <Card.Group doubling stackable itemsPerRow={1}>
                        {this.state.map(user => {
                            return (
                                <User user={ user } key={user._id} />
                            );
                        })}
                    </Card.Group>
                </Container>
            );
        }
    }
}