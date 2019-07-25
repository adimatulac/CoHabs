import React from 'react';
import { Container, Grid, Label, Button } from 'semantic-ui-react';
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
                </Grid>
                <Container textAlign='left' style={{ paddingTop: '14px' }}>
                        <Button size='mini' color='grey' style={{ fontSize: '0.9rem', fontWeight: '700', padding: '.5833em .833em' }} onClick={() => this.props.onFilter('')}>All</Button>
                        <Button size='mini' style={{ backgroundColor: '#5CC0FF', fontSize: '0.9rem', fontWeight: '700', padding: '.5833em .833em' }} onClick={() => this.props.onFilter('event')}>Events</Button>
                        <Button size='mini' style={{ backgroundColor: '#FF5B5B', fontSize: '0.9rem', fontWeight: '700', padding: '.5833em .833em' }} onClick={() => this.props.onFilter('request')}>Requests</Button>
                        <Button size='mini' style={{ backgroundColor: '#FFEC55', fontSize: '0.9rem', fontWeight: '700', padding: '.5833em .833em' }} onClick={() => this.props.onFilter('reminder')}>Reminders</Button>
                </Container> 
            </Container>
        );
    }
}