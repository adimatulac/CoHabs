import React from 'react';
import { Card, Header, Modal, Button, Popup, Label, Icon, Grid } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { Meteor } from 'meteor/meteor';
const moment = require('moment');

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.getColour = this.getColour.bind(this);
        this.handleAcceptRequest = this.handleAcceptRequest.bind(this);
        this.handleRemoveFromRequest = this.handleRemoveFromRequest.bind(this);
        this.handleAcceptGoing = this.handleAcceptGoing.bind(this);
        this.handleRemoveFromGoing = this.handleRemoveFromGoing.bind(this);
        this.handleAcceptInterested = this.handleAcceptInterested.bind(this);
        this.handleRemoveFromInterested = this.handleRemoveFromInterested.bind(this);
        this.userExistsInHelpers = this.userExistsInHelpers.bind(this);
        this.userExistsInGoing = this.userExistsInGoing.bind(this);
        this.userExistsInInterested = this.userExistsInInterested.bind(this);

        this.state = {
            open: false
        }
    }

    handleShow = () => {
        this.setState({ 
            open: true 
        });
    }

    handleClose = () => {
        this.setState({ 
            open: false 
        });
    }

    handleAcceptRequest = () => {
        if (!this.userExistsInHelpers() || this.props.note.helpers === undefined) {
            Meteor.call('notes.addHelper', this.props.note._id, Meteor.user());
        }
    }

    handleRemoveFromRequest = () => {
        console.log('removing request');
        Meteor.call('notes.removeHelper', this.props.note._id, Meteor.user());
    }

    userExistsInHelpers = () => {
        if (this.props.note.helpers !== undefined) {
            if (this.props.note.helpers.length !== 0) {
                return this.props.note.helpers.some(h => {
                    return h.username === Meteor.user().username
                });
            }
        }
    }

    handleAcceptGoing = () => {
        if (!this.userExistsInGoing() || this.props.note.going === undefined) {
            Meteor.call('notes.addGoing', this.props.note._id, Meteor.user());
        }
    }

    handleRemoveFromGoing = () => {
        Meteor.call('notes.removeGoing', this.props.note._id, Meteor.user());
    }

    userExistsInGoing = () => {
        if (this.props.note.going !== undefined) {
            if (this.props.note.going.length !== 0) {
                return this.props.note.going.some(h => {
                    return h.username === Meteor.user().username
                });
            }
        }
    }

    handleAcceptInterested = () => {
        if (!this.userExistsInInterested() || this.props.note.interested === undefined) {
            Meteor.call('notes.addInterested', this.props.note._id, Meteor.user());
        }
    }

    handleRemoveFromInterested = () => {
        console.log('removing request');
        Meteor.call('notes.removeInterested', this.props.note._id, Meteor.user());
    }

    userExistsInInterested = () => {
        if (this.props.note.interested !== undefined) {
            if (this.props.note.interested.length !== 0) {
                return this.props.note.interested.some(h => {
                    return h.username === Meteor.user().username
                });
            }
        }
    }

    getColour(type) {
        switch (type) {
            case 'event':
                return '#DBF1FF'
            case 'request':
                return '#FFDBDB'
            case 'reminder':
                return '#FFFBDB'
            default:
                return ''
        }
    }

    render() {
        const { open } = this.state;
        return (
                <Card style={{ textAlign: 'left', backgroundColor: this.getColour(this.props.note.type) }} onClick={this.handleShow}>
                    <div style={{ padding: '14px' }}>
                        <Card.Meta>
                            <Grid columns={2}>
                                <Grid.Column width={12} style={{ margin: 0 }}>
                                    { moment(this.props.note.date).format('ddd, MMMM D YYYY') }
                                </Grid.Column>
                                { this.props.note.type === 'request' && this.props.note.helpers !== undefined && this.props.note.helpers.length !== 0 ? 
                                    <Grid.Column width={4} textAlign='right' style={{ paddingRight: 0 }}>
                                        <Icon name='check' color='red'/>
                                    </Grid.Column> : ''
                                }
                                { this.props.note.type === 'event' && this.props.note.going !== undefined && this.props.note.going.length !== 0 ? 
                                    <Grid.Column width={4} textAlign='right' style={{ paddingRight: 0 }}>
                                        <Label circular color='blue'>
                                            {this.props.note.going.length}
                                        </Label>
                                    </Grid.Column> : ''
                                }
                            </Grid>
                        </Card.Meta>
                    </div>
                    <Card.Content>
                        <Card.Header style={{ paddingTop: '0', paddingLeft: '0', textAlign: 'left', color: '#3D3D3D' }}>{ this.props.note.message }</Card.Header>
                        <Card.Description>
                            {this.props.note.details}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{ textAlign: 'right' }}>
                        { this.props.note.username }
                    </Card.Content>
                    <Modal size={'mini'} open={open} onClose={this.handleClose}>
                        <Modal.Header style={{ textAlign: 'left', fontSize: '16px', color: '#4D4D4D' }}>
                            { moment(this.props.note.date).format('ddd, MMMM D YYYY') }
                        </Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header textAlign='left' style={{ marginBottom: '0' }}>{this.props.note.message}</Header>
                            <p style={{ color: '#8A8A8A' }}>@{this.props.note.username}</p>
                            <p>{this.props.note.details}</p>
                            { this.props.note.helpers !== undefined && this.props.note.type === 'request' ? 
                            this.props.note.helpers.map(helper => {
                                if (helper._id === Meteor.user()._id) {
                                    return (
                                    <Label key={helper._id} basic color='red'>
                                        {helper.username}
                                        <Icon name='delete' onClick={this.handleRemoveFromRequest} />
                                    </Label>
                                    )
                                } else {
                                    return (
                                    <Label key={helper._id} basic color='red'>{helper.username}</Label>
                                    )
                                }
                            }) : '' }
                            { this.props.note.going !== undefined && this.props.note.type === 'event' ? 
                            this.props.note.going.map(guest => {
                                if (guest._id === Meteor.user()._id) {
                                    return (
                                    <Label key={guest._id} basic color='blue'>
                                        {guest.username}
                                        <Icon name='delete' onClick={this.handleRemoveFromGoing} />
                                    </Label>
                                    )
                                } else {
                                    return (
                                    <Label key={guest._id} basic color='blue'>{guest.username}</Label>
                                    )
                                }
                            }) : '' }
                        </Modal.Description>
                        { this.props.note.type === 'request' ? 
                        <Button color='blue' style={{ marginTop: '20px' }} onClick={this.handleAcceptRequest}>Accept Request</Button> : '' }
                        { this.props.note.type === 'event' ? 
                        <Button.Group>
                            <Button color='blue' style={{ marginTop: '20px' }} onClick={this.handleAcceptGoing}>Going</Button>
                        </Button.Group>
                         : '' }
                    </Modal.Content>
                    <Modal.Actions>
                        { Meteor.user().username === this.props.note.username ? 
                        <div>
                            <Popup 
                                trigger={
                                    <Button icon>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </Button>}
                                content={
                                    <div>
                                        <p style={{ fontWeight: 'bold' }}>Are you sure you want to delete this note?</p>
                                        <p>There's no going back!</p>
                                        <div>
                                            <Button color='red' content='Yes, Delete' onClick={() => this.props.onDelete(this.props.note._id)}/>
                                        </div>
                                    </div>}
                                on='click'
                                position='top right'
                            />
                        </div> : ''}
                    </Modal.Actions>
                    </Modal>
                </Card>
        );
    }
}