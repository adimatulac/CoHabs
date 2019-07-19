import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import Notes from '../../api/notes';
import { DateInput } from 'semantic-ui-calendar-react';
import { Meteor } from 'meteor/meteor';

const options = [
    { key: 'n', text: 'none', value: 'none'},
    { key: 'ev', text: 'event', value: 'event'},
    { key: 'rq', text: 'request', value: 'request'},
    { key: 'rm', text: 'reminder', value: 'reminder'}
]

export default class AddNoteDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

        this.state = {
            open: false,
            message: '',
            details: '',
            type: '',
            date: '',
            username: ''
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
            message: '',
            details: '',
            type: '',
            date: ''
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            username: Meteor.user().username
        });
    };

    handleDateChange = (e, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    handleSelectChange = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.textContent);
        this.setState({
            type: e.target.textContent
        });
    };

    // TODO: bug in dropdown menu when using keyboard (repeats all options)
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.message.trim() && this.state.date.trim() && this.state.type.trim()) {
            Meteor.call('notes.insert', this.state.type, this.state.message, this.state.details, this.state.date, this.state.username);
            this.handleClose();
        }
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Button onClick={this.handleShow}>Add Note</Button>

                <Modal size={'mini'} open={open} onClose={this.handleClose}>
                    <Modal.Header>What's on your mind?</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Field>
                                    <Form.Select name='type' options={options} placeholder='type' onChange={this.handleSelectChange} />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.Field>
                                    <input name='message' value={this.state.message} onChange={this.handleChange} placeholder='message' />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.TextArea name='details' value={this.state.details} placeholder='details' onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <DateInput
                                name='date'
                                placeholder='date'
                                dateFormat='MMMM D YYYY'
                                value={this.state.date}
                                icon={false}
                                closable={true}
                                duration={0}
                                onChange={this.handleDateChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={this.handleSubmit} style={{ backgroundColor: '#2196F3', color: 'white' }}>Add</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}