import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import AddNoteDialog from './AddNoteDialog';

export default class NotesBoardHeader extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <Grid columns={2}>
                    <Grid.Column textAlign='left'>
                        <h1>Notes</h1>
                    </Grid.Column>  
                    <Grid.Column textAlign='right'>
                        <AddNoteDialog />
                    </Grid.Column>  
                </Grid>
            </Container>
        );
    }
}