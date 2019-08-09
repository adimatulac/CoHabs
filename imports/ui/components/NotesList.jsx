import React from 'react';
import { Message, Container, Card, Transition } from 'semantic-ui-react';
import Notes from '../../api/notes';
import Note from './Note';
import { Meteor } from 'meteor/meteor';
import { faThList } from '@fortawesome/free-solid-svg-icons';

export default class NotesList extends React.Component {

    onDelete = (id) => {
        Meteor.call('notes.remove', id);
    };

    render() {
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
                <Container style={{ paddingTop: '12px' }}>
                    <Card.Group doubling stackable itemsPerRow={4}>
                        { this.props.notesFilter !== '' ? 
                            this.props.notes.filter(note => {
                                return note.type === this.props.notesFilter
                            }).sort( function(a, b){
                                return new Date(a.date) - new Date(b.date);
                            }).map(filteredNote => {
                                return (
                                    <Note note={ filteredNote } key={filteredNote._id} onDelete={this.onDelete} />
                                )
                            }) : 
                            this.props.notes.sort( function(a, b){
                                return new Date(a.date) - new Date(b.date);
                            }).map(allNote => {
                                return (
                                    <Note note={ allNote } key={allNote._id} onDelete={this.onDelete} />
                                );
                            })}            
                    </Card.Group>
                </Container>
            );
        }
    }
}