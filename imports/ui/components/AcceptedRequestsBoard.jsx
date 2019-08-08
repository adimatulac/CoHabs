import React from 'react';
import { Container, Grid, Message, Card } from 'semantic-ui-react';
import Note from './Note';

export default class AcceptedRequestsBoard extends React.Component {
    render() {
        if (this.props.notes.length === 0) {
            return (
                <div>
                    <Container style={{ marginTop: '14px' }}>
                        <Grid>
                            <Grid.Column textAlign='left' style={{ paddingBottom: '0' }}>
                                <h2 style={{ color: '#4D4D4D' }}>Accepted Requests</h2>
                            </Grid.Column> 
                        </Grid>
                    </Container>
                    <div style={{ width: '100%', padding: '40px' }}>
                        <Message style={{ width: '200px', margin: 'auto' }}>
                            No accepted requests.
                        </Message>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Container style={{ marginTop: '14px' }}>
                        <Grid>
                            <Grid.Column textAlign='left' style={{ paddingBottom: '0' }}>
                                <h2 style={{ color: '#4D4D4D' }}>Accepted Requests</h2>
                            </Grid.Column> 
                        </Grid>
                    </Container>
                    <Container style={{ paddingTop: '75px' }}>
                    <Card.Group doubling stackable itemsPerRow={1}>
                        { this.props.acceptedNotes.sort( function(a, b){
                                return new Date(a.date) - new Date(b.date);
                            }).map(note => {
                                return (
                                    <Note note={ note } key={note._id} onDelete={this.onDelete} />
                                );
                            })}
                        </Card.Group>
                    </Container>
                </div>
            );
        }
    }
}