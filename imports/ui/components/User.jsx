import React from 'react';
import { Card, Grid, Header } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default class User extends React.Component {
    render() {
        return (
            <Card>
                <Card.Content>
                    <Grid columns={2}>
                        <Grid.Column width={12} textAlign='left'>
                            <h4>{ this.props.user.firstname } { this.props.user.lastname }</h4>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign='right'>
                            <FontAwesomeIcon icon={faUserCircle} size='lg' color='grey' style={{ marginLeft: 'auto' }} />
                        </Grid.Column>
                    </Grid>
                    <Card.Meta textAlign='left'>@{ this.props.user.username }</Card.Meta>
                    <Card.Description textAlign='left'>some extra profile thing</Card.Description>
                </Card.Content>
            </Card>
        );
    }
}