import React from 'react';
import { Container, Card, Message } from 'semantic-ui-react';
import User from './User';
import { Meteor } from 'meteor/meteor';
import { Groups } from '../../api/notes' 
export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        // Meteor.subscribe('users');
        //Meteor.subscribe('group');
        // console.log(Meteor.user().profile.group);
        // console.log("this.props is " + JSON.stringify(Groups.find({_id: Meteor.user().profile.group}).fetch()));
        // let groupArray = Groups.find({_id: Meteor.user().profile.group}).fetch();
        //let group  = groupArray[0];
        // console.log("member is: " + JSON.stringify(group));
        // let members = group.members;
        console.log(this.props);
        if (this.props.groups.length === 0) {
            return (
                <div style={{ width: '100%', padding: '40px' }}>
                    <Message style={{ width: '200px', margin: 'auto' }}>
                        No roomies yet &#x1F622;
                    </Message>
                </div>
            );
        } else {
            return (
                <Container style={{ paddingTop: '20px' }}>
                    <Card.Group doubling stackable centered itemsPerRow={1}>
                        {this.props.groups[0].members.map(user => {
                            return (
                                <User user={user} key={user} />
                            );
                        })}
                    </Card.Group>
                </Container>
            );
        }
    }
}