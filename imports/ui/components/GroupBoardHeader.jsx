import React from 'react';
import { Container, Grid, Label } from 'semantic-ui-react';
import AddUserDialog from './AddUserDialog';

export default class GroupBoardHeader extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <Grid columns={2}>
                    <Grid.Column textAlign='left' style={{ paddingBottom: '0' }}>
                        <h2 style={{ color: '#4D4D4D' }}>Household</h2>
                    </Grid.Column>  
                    <Grid.Column textAlign='right' style={{ paddingBottom: '0' }}>
                        <AddUserDialog />
                    </Grid.Column> 
                    <Grid.Column textAlign='left' style={{ paddingTop: '0' }}>
                        <Label color='teal'>Chingooz</Label>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}