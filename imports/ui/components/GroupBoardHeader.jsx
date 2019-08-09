import React from 'react';
import { Container, Grid, Label } from 'semantic-ui-react';
import AddUserDialog from './AddUserDialog';
import { Meteor } from 'meteor/meteor';
import { Groups } from '../../api/notes'

export default class GroupBoardHeader extends React.Component {
    render() {
        if (this.props.groups.length !== 0) {
            return (
                <div>
                    <Grid columns='equal'>
                        <Grid.Row>
                        <Grid.Column width={12} textAlign='left' style={{ paddingBottom: '0' }}>
                            <h2 style={{ color: '#4D4D4D' }}>Household</h2>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign='right' style={{ paddingBottom: '0' }}>
                            <AddUserDialog />
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column>
                            <Label color='blue' size='large' image>
                                {this.props.groups[0].name}
                                <Label.Detail>{this.props.groups[0].members.length} members</Label.Detail>
                            </Label>
                        </Grid.Column>
                        </Grid.Row>
                        
                    </Grid>
                </div>
            )
        }
        else {
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
                            <Label color='blue'>CoHabs</Label>
                        </Grid.Column>
                    </Grid>
                </Container>
            )
        }
    }
}