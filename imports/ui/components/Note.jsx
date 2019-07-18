import React from 'react';
import { Card } from 'semantic-ui-react';

export default ({ note: { _id, message, type, date, username }, onDelete }) => {
    return (
        <Card style={{ width: '219px', textAlign: 'left' }}>
            <Card.Content>
                <Card.Header style={{ paddingLeft: '0', textAlign: 'left' }}>{ message }</Card.Header>
                <Card.Meta>{ type }</Card.Meta>
                <Card.Description>
                    This is a note.
                </Card.Description>
            </Card.Content>
            <Card.Content extra style={{ textAlign: 'right' }}>
                { username }
            </Card.Content>
        </Card>
    );
}