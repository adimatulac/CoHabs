import React from 'react';
import { Button, Container, Grid } from 'semantic-ui-react';
import EditProfileDialog from './EditProfileDialog';

export default class UserProfileHeader extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: '14px' }}>
                <Grid columns={2}>
                    <Grid.Column width={12} textAlign='left' style={{ paddingBottom: '0' }}>
                        <h2 style={{ color: '#4D4D4D' }}>User Profile</h2>
                    </Grid.Column>  
                    <Grid.Column width={4} textAlign='right' style={{ paddingBottom: '0' }}>
                        <EditProfileDialog />
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}