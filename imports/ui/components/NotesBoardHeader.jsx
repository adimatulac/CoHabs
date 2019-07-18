import React from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import AddNoteDialog from './AddNoteDialog';

export default class NotesBoardHeader extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <Grid columns={2}>
                    <Grid.Column textAlign='left' style={{ paddingBottom: '0' }}>
                        <h2 style={{ color: '#4D4D4D' }}>Notes</h2>
                    </Grid.Column>  
                    <Grid.Column textAlign='right' style={{ paddingBottom: '0' }}>
                        <AddNoteDialog />
                    </Grid.Column>  
                    <Grid.Column textAlign='left' style={{ paddingTop: '0' }}>
                        <div style={{ width: '100%', margin: '0 auto' }}>
                            <div style={{ marginTop: '2px', height: '14px', width: '14px', borderRadius: '2px', backgroundColor: '#36B1FF', display: 'inline-block' }} />
                            <p style={{ display: 'inline-block', margin: '0 0 4px 6px' }}>events</p>
                            <div style={{ marginTop: '2px', marginLeft: '12px', height: '14px', width: '14px', borderRadius: '2px', backgroundColor: '#FF4747', display: 'inline-block' }} />
                            <p style={{ display: 'inline-block', margin: '0 0 4px 6px' }}>requests</p>
                            <div style={{ marginTop: '2px', marginLeft: '12px', height: '14px', width: '14px', borderRadius: '2px', backgroundColor: '#FFE622', display: 'inline-block' }} />
                            <p style={{ display: 'inline-block', margin: '0 0 4px 6px' }}>reminders</p>
                        </div>
                    </Grid.Column> 
                </Grid>
            </Container>
        );
    }
}