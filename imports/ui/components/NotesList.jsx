import React from 'react';
import { Message, Container, Card } from 'semantic-ui-react';
import Notes from '../../api/notes';
import Note from './Note';

export default class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    onDelete = (id) => {
        Notes.remove(id);
    };

    render() {
        console.log(this.props);
        console.log('rendering list ...');

        if (this.props.notes.length === 0) {
            return (
                <Message>
                    No notes on board.
                </Message>
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