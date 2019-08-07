import React from 'react';
import { Card, Grid, Header } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default class User extends React.Component {
    
    render() {
        // Meteor.subscribe('users');
        //console.log(Meteor.users.find().fetch());
        //console.log("now im in user" + JSON.stringify(Meteor.users.find({_id: this.props.user}).fetch()));
        if (Meteor.users.find({_id: this.props.user}).fetch()[0] === undefined) {
        return (
            <div> nothing </div>
        )}
        else {  
        // console.log("now im in user" + Meteor.users.find({_id: this.props.user}).fetch()[0].username);
         return (<Card>
                <Card.Content>
                    <Grid columns={2}>
                        <Grid.Column width={12} textAlign='left'>
                            <h4>{ Meteor.users.find({_id: this.props.user}).fetch()[0].profile.fname } { Meteor.users.find({_id: this.props.user}).fetch()[0].profile.lname }</h4>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign='right'>
                            <FontAwesomeIcon icon={faUserCircle} size='lg' color='grey' style={{ marginLeft: 'auto' }} />
                        </Grid.Column>
                    </Grid>
                    <Card.Meta textAlign='left'>@ { Meteor.users.find({_id: this.props.user}).fetch()[0].username }</Card.Meta>
                </Card.Content>
            </Card>
        )
        }

    }
}