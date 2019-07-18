import React from 'react';
import { withHistory, Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import MenuBar from '../components/MenuBar';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let username = document.getElementById('login-username').value;
        let password = document.getElementById('login-password').value;
        Meteor.loginWithPassword(username, password, (err) => {
            if (err) {
                this.setState({
                    error: err.reason
                });
            } else {
                this.props.history.push('/');
            }
        });
    }

    render() {
        const error = this.state.error;
        return (
            <div>
                <MenuBar />
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' textAlign='center' style={{ color: '#1971C2' }}>
                        Log in to your household
                    </Header>
                    <Message attached>Please enter your username and password to continue.</Message>
                    <Form id='login-form' className='attached fluid segment' size='large' onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <input type='text' id='login-username' placeholder='username'></input>
                            </Form.Field>
                            <Form.Field>
                                <input type='password' id='login-password' placeholder='password'></input>
                            </Form.Field>
                            <Button fluid size='large' style={{ backgroundColor: '#2196F3', color: 'white' }} onClick={this.handleSubmit}>
                                Log in
                            </Button>
                    </Form>
                    { error.length > 0 ? 
                        <Message className='attached' warning>
                            <Message.Header style={{ paddingTop: 0 }}>Oops!</Message.Header>
                            {error}. Please try again.
                        </Message>
                        : ''
                    }
                    <Message attached='bottom'>
                        Don't have an account? Register <Link to='/signup'>here</Link>
                    </Message>
                </Grid.Column>
            </Grid>
            </div>
        );
    }
}