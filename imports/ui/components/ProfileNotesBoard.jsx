import React from 'react';
import NotesBoardHeader from './NotesBoardHeader';
import { Container } from 'semantic-ui-react';
import ProfileNotesListContainer from '../containers/ProfileNotesListContainer';

export default class ProfileNotesBoard extends React.Component {
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
                <NotesBoardHeader onFilter={this.onFilter} />
                <ProfileNotesListContainer notesFilter={this.state.type} />
            </Container>
        );
    }
}