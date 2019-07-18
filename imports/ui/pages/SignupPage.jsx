import React from 'react';
import { withHistory, Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Container } from '@material-ui/core';
import Alert from 'react-bootstrap/Alert';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import MenuBar from '../components/MenuBar';

export default class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let username = document.getElementById('signup-username').value;
        console.log('username: ' + username);
        let passwordPri = document.getElementById('signup-password-pri').value;
        let passwordSec = document.getElementById('signup-password-sec').value;
        if (passwordPri !== passwordSec) {
            this.setState({
                error: 'Passwords don\'t match'
            });
        } else {
            Accounts.createUser({username: username, password: passwordPri}, (err) => {
                if (err) {
                    console.log('error');
                    this.setState({
                        error: err.reason
                    });
                } else {
                    console.log('success');
                    this.props.history.push('/login');
                }
            });
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
                        Welcome to CoHabs
                    </Header>
                    <Message attached>Fill out the form below to sign up for a new account.</Message>
                    <Form id='login-form' className='attached fluid segment' size='large' onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <input type='text' id='signup-username' placeholder='username'></input>
                            </Form.Field>
                            <Form.Field>
                                <input type='password' id='signup-password-pri' placeholder='password'></input>
                            </Form.Field>
                            <Form.Field>
                                <input type='password' id='signup-password-sec' placeholder='password again'></input>
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
                    <Message attached='bottom'>
                        Already have an account? Login <Link to="/login">here</Link>
                    </Message>
                </Grid.Column>
            </Grid>
            </div>
        );
    }
}