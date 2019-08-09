import React from 'react';
import { Button, Modal, Form, Header } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';
import { Meteor } from 'meteor/meteor';

export default class AddUserDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            open: false,
            email: ''
        }
    }

    handleShow = () => {
        this.setState({ 
            open: true 
        });
    }

    handleClose = () => {
        this.handleClear();
        this.setState({ 
            open: false 
        });
    }

    handleClear = () => {
        this.setState({
            email: ''
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    // TODO: bug in dropdown menu when using keyboard (repeats all options)
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email.trim()) {
            console.log(this.state.email);
            Meteor.call('sendEmail',this.state.email,'coHabs@gmail.com', "Let's Join CoHabs!", 
            "Hi! \n" + 
            Meteor.user().profile.fname + 
            " sent you an invitation to coHabs.\n"
            + "Go to http://cohabs.meteorapp.com/signup and enter this group id: " + Meteor.user().profile.group + " to join the group! \n"
            + "Welcome to CoHabs :) ");
            this.handleClose();
        }
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Button size='small' onClick={this.handleShow}>
                    <FontAwesomeIcon icon={faUserPlus}/>
                </Button>

                <Modal size={'mini'} open={open} onClose={this.handleClose}>
                    <Modal.Header>
                        Add a new member
                        <Header style={{ marginTop: '6px' }}>
                            <Header.Subheader>
                                Enter their email to send them an invitation.
                            </Header.Subheader>
                        </Header>
                    </Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Field>
                                    <input name='email' value={this.state.email} onChange={this.handleChange} placeholder='email' />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={this.handleSubmit} className='primary-button'>Send link</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}