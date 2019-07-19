import React from 'react';
import { Container, Message } from 'semantic-ui-react';

export default class GroupBoard extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <Message>No roomies yet &#x1F622;</Message>
            </Container>
        );
    }
}