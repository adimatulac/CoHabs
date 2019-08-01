import React from 'react';
import { Button, Form, Grid, Header, Message } from 'semantic-ui-react';
import MenuBar from '../components/MenuBar';

export default class RegisterGroupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let groupName = document.getElementById('group-name').value;
        if (!groupName) {
            this.setState({
                error: 'You need to name your group'
            });
        } else {
            console.log('username: ' + Meteor.user().username)
            console.log('group name: ' + groupName);
            // TODO: create group and insert group id property to current user
            this.props.history.push('/login');
        }
    }

    render() {
        const error = this.state.error;
        return (
            <div>
                <MenuBar />
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' textAlign='center' style={{ color: '#1971C2' }}>
                        Register your Group
                    </Header>
                    <Message attached>What do you want to name your group?</Message>
                    <Form id='login-form' className='attached fluid segment' size='large' onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <input type='text' id='group-name' placeholder='group'></input>
                            </Form.Field>
                            <Button fluid size='large' style={{ backgroundColor: '#2196F3', color: 'white' }} onClick={this.handleSubmit}>
                                Sign up
                            </Button>
                    </Form>
                    { error.length > 0 ? 
                        <Message className='attached' warning>
                            <Message.Header style={{ paddingTop: 0 }}>Oops!</Message.Header>
                            {error}. Please try again.
                        </Message>
                        : ''
                    }
                </Grid.Column>
            </Grid>
            </div>
        );
    }
}