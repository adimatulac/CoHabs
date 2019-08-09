import React from 'react';
import { Button, Modal, Form, Header } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Meteor } from 'meteor/meteor';


// type = rent, internet, utilities
// pie charts should equally divide the submitted numeric value into number-of-cohabs pieces

const options = [
    { key: 'r', text: 'rent', value: 'rent' },
    { key: 'u', text: 'utilities', value: 'utilities' },
    { key: 'i', text: 'internet', value: 'internet' },
];

export default class PaidDialog extends React.Component {
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
        if (this.state.type.trim()) {
            Meteor.call('bills.updatePaidMember', this.state.type, Meteor.user().profile.group, Meteor.user()._id);
            this.handleClose();
        }
    }

    render() {
        const { open } = this.state;
        return (
            <div>
                <Button onClick={this.handleShow}>
                    <FontAwesomeIcon icon={faDollarSign} />
                </Button>

                <Modal size={'mini'} open={open} onClose={this.handleClose}>
                    <Modal.Header>
                        Confirm a Payment
                        <Header style={{ marginTop: '6px' }}>
                            <Header.Subheader>
                                Update the status on your share of the bills.
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
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={this.handleSubmit} color='blue'>Confirm Payment</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}