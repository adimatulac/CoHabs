import React from 'react';
import NotesBoardHeader from './NotesBoardHeader';
import { Container } from 'semantic-ui-react';
import NotesListContainer from '../containers/NotesListContainer';

export default class NotesBoard extends React.Component {
    render() {
        return (
            <Container>
                <NotesBoardHeader />
                <NotesListContainer />
            </Container>
        );
    }
}