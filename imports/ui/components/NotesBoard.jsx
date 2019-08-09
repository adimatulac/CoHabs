import React from 'react';
import NotesBoardHeader from './NotesBoardHeader';
import { Container } from 'semantic-ui-react';
import NotesListContainer from '../containers/NotesListContainer';

export default class NotesBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: ''
        }

        this.onFilter = this.onFilter.bind(this);
    }

    onFilter = (type) => {
        this.setState({
            type: type
        });
    };

    render() {
        return (
            <Container>
                <NotesBoardHeader onFilter={this.onFilter} page='dashboard' />
                <NotesListContainer notesFilter={this.state.type} />
            </Container>
        );
    }
}