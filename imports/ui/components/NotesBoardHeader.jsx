import React from 'react';
import { Container, Grid, Label, Button, Dropdown } from 'semantic-ui-react';
import AddNoteDialog from './AddNoteDialog';

export default class NotesBoardHeader extends React.Component {
    
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <Grid>
                    <Grid.Column width={12} textAlign='left' style={{ paddingBottom: '10px' }}>
                        { this.props.page === 'dashboard' ? <h2 style={{ color: '#4D4D4D' }}>Everyone's notes</h2> : <h2 style={{ color: '#4D4D4D' }}>My notes</h2> }
                    </Grid.Column>  
                    <Grid.Column width={4} textAlign='right' style={{ paddingBottom: '0' }}>
                        <AddNoteDialog />
                    </Grid.Column>  
                </Grid>
                <Container textAlign='left' style={{ paddingTop: '14px' }}>
                    <Dropdown text='Filter by Type' icon='filter' floating labeled button className='icon'>
                        <Dropdown.Menu>
                            <Dropdown.Item label={{ color: 'grey', empty: true, circular: true }} text='All' onClick={() => this.props.onFilter('')} />
                            <Dropdown.Item label={{ color: 'green', empty: true, circular: true }} text='Events' onClick={() => this.props.onFilter('event')} />
                            <Dropdown.Item label={{ color: 'red', empty: true, circular: true }} text='Requests' onClick={() => this.props.onFilter('request')} />
                            <Dropdown.Item label={{ color: 'yellow', empty: true, circular: true }} text='Reminders' onClick={() => this.props.onFilter('reminder')} />
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Container>
        );
    }
}