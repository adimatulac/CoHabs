import React from 'react';
import { Card } from 'semantic-ui-react';

export default class User extends React.Component {
    render() {
        return (
            <Card>
                <Card.Content style={{ textAlign: 'left' }}>
                    <Card.Header style={{ paddingTop: '0', paddingLeft: '0', textAlign: 'left' }}>{ this.props.user.firstname } { this.props.user.lastname }</Card.Header>
                    <Card.Meta>@{ this.props.user.username }</Card.Meta>
                    <Card.Description>some extra profile thing</Card.Description>
                </Card.Content>
            </Card>
        );
    }
}