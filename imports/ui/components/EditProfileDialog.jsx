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

        this.state = {
            open: false,
            fname: '',
            lname: '',
            phone: '',
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

    // TODO: bug in dropdown menu when using keyboard (repeats all options)
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('changes saved!');
        this.handleClose();
        // if (this.state.message.trim() && this.state.type.trim()) {
        //     Meteor.call('notes.insert', this.state.type, this.state.message, this.state.details, this.state.date, this.state.username, this.state.groupid);
        //     this.handleClose();
        // }
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
                        <Button onClick={this.handleSubmit} style={{ backgroundColor: '#2196F3', color: 'white' }}>Save Changes</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}