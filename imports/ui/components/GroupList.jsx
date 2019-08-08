import React from 'react';
import { Container, Card, Message } from 'semantic-ui-react';
import User from './User';
export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this.props);
        if (this.props.groups.length === 0) {
            return (
                <div style={{ width: '100%', padding: '40px' }}>
                    <Message style={{ width: '200px', margin: 'auto' }}>
                        No roomies yet &#x1F622;
                    </Message>
                </div>
            );
        } else {
            return (
                <Container style={{ paddingTop: '20px' }}>
                    <Card.Group doubling stackable centered itemsPerRow={1}>
                        {this.props.groups[0].members.map(user => {
                            return (
                                <User user={user} key={user} />
                            );
                        })}
                    </Card.Group>
                </Container>
            );
        }
    }
}