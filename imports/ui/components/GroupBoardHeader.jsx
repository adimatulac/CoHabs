import React from 'react';
import { Container, Grid, Label } from 'semantic-ui-react';
import AddUserDialog from './AddUserDialog';
import { Meteor } from 'meteor/meteor';
import { Groups } from '../../api/notes' 

export default class GroupBoardHeader extends React.Component {
    render() {
        Meteor.subscribe('group');
        console.log(Meteor.user().profile.group);
        console.log(Groups.find({_id: Meteor.user().profile.group}).fetch()[0]);
        let group = Groups.find({_id: Meteor.user().profile.group}).fetch()[0];
        if(group !== undefined) {
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
                        <Label color='teal'>{group.name}</Label>
                    </Grid.Column>
                </Grid>
            </Container>
        )}
        else {
            return(
                <Container style={{ marginTop: '14px' }}>
                <Grid columns={2}>
                    <Grid.Column textAlign='left' style={{ paddingBottom: '0' }}>
                        <h2 style={{ color: '#4D4D4D' }}>Household</h2>
                    </Grid.Column>  
                    <Grid.Column textAlign='right' style={{ paddingBottom: '0' }}>
                        <AddUserDialog />
                    </Grid.Column> 
                    <Grid.Column textAlign='left' style={{ paddingTop: '0' }}>
                        <Label color='teal'>CoHabs</Label>
                    </Grid.Column>
                </Grid>
            </Container>
            )
        }
    }
}