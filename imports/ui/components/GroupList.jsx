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
        Meteor.subscribe('group');
        console.log(Meteor.user().profile.group);
        console.log("this.props is " + JSON.stringify(Groups.find({_id: Meteor.user().profile.group}).fetch()));
        let groupArray = Groups.find({_id: Meteor.user().profile.group}).fetch();
        let group  = groupArray[0];
        console.log("member is: " + JSON.stringify(group));
        // let members = group.members;
        if (group === undefined) {

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
                        {group.members.map(user => {
                            return (
                                <User user={ user } />
                            );
                        })}
                    </Card.Group>
                </Container>
            );
        }
    }
}