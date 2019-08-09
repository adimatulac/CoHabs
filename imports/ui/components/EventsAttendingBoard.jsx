import React from 'react';
import { Container, Grid, Message, Card } from 'semantic-ui-react';
import Note from './Note';

export default class EventsAttendingBoard extends React.Component {
    render() {
        if (this.props.eventsAttending.length === 0) {
            return (
                <div>
                    <Container style={{ marginTop: '14px' }}>
                        <Grid>
                            <Grid.Column textAlign='left' style={{ paddingBottom: '0' }}>
                                <h2 style={{ color: '#4D4D4D' }}>Events attending</h2>
                            </Grid.Column> 
                        </Grid>
                    </Container>
                    <div style={{ width: '100%', padding: '40px' }}>
                        <Message style={{ width: '200px', margin: 'auto' }}>
                            No events attending, you loser.
                        </Message>
                    </div>
                </div>
            );
        } else {
            console.log(this.props.eventsAttending);
            return (
                <div>
                    <Container style={{ marginTop: '14px' }}>
                        <Grid>
                            <Grid.Column textAlign='left' style={{ paddingBottom: '0' }}>
                                <h2 style={{ color: '#4D4D4D' }}>Events attending</h2>
                            </Grid.Column> 
                        </Grid>
                    </Container>
                    <Container style={{ paddingTop: '40px' }}>
                        <Card.Group doubling stackable itemsPerRow={4}>
                            { this.props.eventsAttending.sort( function(a, b){
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