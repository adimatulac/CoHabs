import React from 'react';
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react';
import MenuBar from '../components/MenuBar';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class RegisterGroupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmitGroupName = this.handleSubmitGroupName.bind(this);
        this.handleSubmitGroupID = this.handleSubmitGroupID.bind(this);
    }

    handleSubmitGroupName(e) {
        e.preventDefault();
        let groupName = document.getElementById('group-name').value;
        if (!groupName) {
            this.setState({
                error: 'You need to name your group'
            });
        } else {
            // TODO: create custom group ID and insert group id property to current user
            // TODO: insert user to new group
            Meteor.call('groupTest.insert', groupName, Meteor.userId());
            this.props.history.push('/');
        }
    }

    handleSubmitGroupID(e) {
        e.preventDefault();
        let groupID = document.getElementById('group-id').value;
        if (!groupID) {
            this.setState({
                error: 'You need to enter your group ID'
            });
        } else {
            console.log('user id: ' + Meteor.userId() + ' ' + Meteor.user().username);
            console.log('group id: ' + groupID);
            // TODO: create group and insert group id property to current user
            Meteor.call('groupTest.update', groupID, Meteor.userId());
            this.props.history.push('/');
            // this.props.history.push('/login');
        }
    }

    // TODO: add error if group doesn't exist in db
    render() {
        const error = this.state.error;
        return (
            <div>
                <MenuBar />
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' textAlign='center' style={{ color: '#1971C2' }}>
                        Create a new Group or enter your existing Group ID
                    </Header>
                    <Message attached>What do you want to name your group?</Message>
                    <Form id='login-form' className='attached fluid segment' size='large' onSubmit={this.handleSubmitGroupName}>
                            <Form.Field>
                                <input type='text' id='group-name' placeholder='group name'></input>
                            </Form.Field>
                            <Button fluid size='large' style={{ backgroundColor: '#2196F3', color: 'white' }} onClick={this.handleSubmitGroupName}>
                                Create group
                            </Button>
                    </Form>
                    { error.length > 0 ? 
                        <Message className='attached' warning>
                            <Message.Header style={{ paddingTop: 0 }}>Oops!</Message.Header>
                            {error}. Please try again.
                        </Message>
                        : ''
                    }
                    <Message attached>
                        Already have a group? Enter your group ID here
                    </Message>
                    <Form id='login-form' className='attached fluid segment' size='large' onSubmit={this.handleSubmitGroupName}>
                        <Form.Group>
                            <Form.Field width='11'>
                                <input type='text' id='group-id' placeholder='group id'></input>
                            </Form.Field>
                            <Form.Button width='5' fluid size='large' style={{ backgroundColor: '#2196F3', color: 'white' }} onClick={this.handleSubmitGroupID}>
                                Enter ID
                            </Form.Button>
                        </Form.Group>
                    </Form>
                    <Message attached='bottom'>
                        <Link to="/signup">Back</Link>
                    </Message>
                </Grid.Column>
            </Grid>
            </div>
        );
    }
}