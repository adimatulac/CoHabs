import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Meteor } from 'meteor/meteor';

export default class EditProfileDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        let phone = '';
        if (Meteor.user().profile.phone !== undefined) {
            phone = Meteor.user().profile.phone;
        }

        let email = '';
        if (Meteor.user().profile.email !== undefined) {
            email = Meteor.user().profile.email;
        }

        this.state = {
            open: false,
            fname: Meteor.user().profile.fname,
            lname: Meteor.user().profile.lname,
            phone: phone,
            email: email
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
            fname: '',
            lname: '',
            phone: '',
            email: ''
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            username: Meteor.user().username
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        Meteor.call('user.update', Meteor.user()._id, this.state.fname, this.state.lname, this.state.phone, this.state.email);
        this.handleClose();
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Button onClick={this.handleShow}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>

                <Modal size={'mini'} open={open} onClose={this.handleClose}>
                    <Modal.Header>Edit Your Profile</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <input name='fname' value={this.state.fname} onChange={this.handleChange} placeholder='first name' />
                                </Form.Field>
                                <Form.Field>
                                    <input name='lname' value={this.state.lname} onChange={this.handleChange} placeholder='last name' />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.Field>
                                    <input name='phone' value={this.state.phone} onChange={this.handleChange} placeholder='phone number' />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.Field>
                                    <input name='email' value={this.state.email} onChange={this.handleChange} placeholder='email address' />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={this.handleSubmit} color='blue'>Save Changes</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}