import React from 'react';
import { Button, Modal, Form, Header } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { DateInput } from 'semantic-ui-calendar-react';
import { Meteor } from 'meteor/meteor';


// type = rent, internet, utilities
// pie charts should equally divide the submitted numeric value into number-of-cohabs pieces

const disabledDates = [
    new Date()
];

const options = [
    { key: 'r', text: 'rent', value: 'rent' },
    { key: 'u', text: 'utilities', value: 'utilities' },
    { key: 'i', text: 'internet', value: 'internet' },
];

export default class EditBillDialog extends React.Component {
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
            amount: '',
            type: '',
            date: '',
            groupid: ''
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
            amount: '',
            type: '',
            date: '',
            groupid: ''
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            username: Meteor.user().username
        });
    };

    handleDateChange = (e, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: new Date(value) });
        }
    }

    handleSelectChange = (e) => {
        this.setState({
            type: e.target.textContent
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('bill date: ' + this.state.date);
        if (this.state.amount.trim() && this.state.type.trim()) {
            Meteor.call('bills.insertupdate', this.state.type, this.state.amount, this.state.date, Meteor.user().profile.group);
            this.handleClose();
        }
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Button onClick={this.handleShow}>
                    <FontAwesomeIcon icon={faFileInvoiceDollar} />
                </Button>

                <Modal size={'mini'} open={open} onClose={this.handleClose}>
                    <Modal.Header>
                        Add a Bill
                        <Header style={{ marginTop: '6px' }}>
                            <Header.Subheader>
                                Enter the total amount for everyone to split.
                            </Header.Subheader>
                        </Header>
                    </Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Field>
                                    <Form.Select name='type' options={options} placeholder='type' onChange={this.handleSelectChange} />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.Field>
                                    <input name='amount' value={this.state.message} onChange={this.handleChange} placeholder='amount' />
                                </Form.Field>
                            </Form.Group>
                            {/* <Form.Group>
                                <Form.TextArea name='details' value={this.state.details} placeholder='details' onChange={this.handleChange} />
                            </Form.Group> */}
                            <Form.Group>
                                <DateInput
                                    name='date'
                                    placeholder='due date'
                                    dateFormat='ddd, MMMM D YYYY'
                                    value={this.state.date}
                                    icon={false}
                                    closable={true}
                                    animation='none'
                                    onChange={this.handleDateChange}
                                    style={{ border: 'none' }}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={this.handleSubmit} color='blue'>Update Bills</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}