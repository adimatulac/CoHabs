import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import AddNoteDialog from './AddNoteDialog';

export default class NotesBoardHeader extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <Grid columns={2}>
                    <Grid.Column textAlign='left'>
                        <h2 style={{ color: '#4D4D4D' }}>Notes</h2>
                    </Grid.Column>  
                    <Grid.Column textAlign='right'>
                        <AddNoteDialog />
                    </Grid.Column>  
                </Grid>
            </Container>
        );
    }
}