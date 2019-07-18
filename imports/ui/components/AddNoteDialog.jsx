import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import Notes from '../../api/notes';
import { DateInput } from 'semantic-ui-calendar-react';

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
        this.handleDateChange = this.handleDateChange.bind(this);

        this.state = {
            open: false,
            message: '',
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

    handleChangeSelect = (e) => {
        console.log(e.target.name);
        console.log(e.target.textContent);
        this.setState({
            type: e.target.textContent
        });
    };

    // TODO: bug in dropdown menu when using keyboard (repeats all options)
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.message.trim() && this.state.date.trim() && this.state.type.trim()) {
            console.log('listing props in input form:');
            console.log(this.props);
            console.log('adding note ...')
            console.log(this.state);
            console.log(Meteor.user().username);
            const newNote = {
                type: this.state.type,
                message: this.state.message,
                date: this.state.date
            }
            Notes.insert(newNote);
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
                                    <Form.Select name='type' label='type' options={options} placeholder='type' onChange={this.handleChangeSelect} />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.Field>
                                    <label>message</label>
                                    <input name='message' value={this.state.message} onChange={this.handleChange} placeholder='message' />
                                </Form.Field>
                            </Form.Group>
                            {/* <Form.Group>
                                <Form.Field style={{ width: '100%' }}>
                                    <label>date</label>
                                    <input name='date' value={this.state.date} onChange={this.handleChange} placeholder='date' />
                                </Form.Field>
                            </Form.Group> */}
                            <Form.Group>
                                <DateInput
                                label='date'
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