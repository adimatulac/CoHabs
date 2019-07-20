import React from 'react';
import { Message, Container, Card } from 'semantic-ui-react';
import Notes from '../../api/notes';
import Note from './Note';
import { Meteor } from 'meteor/meteor';

export default class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    onDelete = (id) => {
        Meteor.call('notes.remove', id);
    };

    render() {
        console.log(this.props);
        console.log('rendering list ...');

        if (this.props.notes.length === 0) {
            return (
                <div style={{ width: '100%', padding: '40px' }}>
                    <Message style={{ width: '200px', margin: 'auto' }}>
                        No notes on board.
                    </Message>
                </div>
            );
        } else {
            return (
                <Container>
                    <Card.Group>
                        {this.props.notes.map(note => {
                            return (
                                <Note note={ note } key={note._id} onDelete={this.onDelete} />
                            );
                        })}
                    </Card.Group>
                </Container>
            );
        }
    }
}