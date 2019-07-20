import React from 'react';
import { Card, Header, Modal, Button, Popup, Label } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.getColour = this.getColour.bind(this);
        this.handleAcceptRequest = this.handleAcceptRequest.bind(this);

        this.state = {
            open: false,
            helpers: [
                {_id: 1, username: 'hellojess'},
                {_id: 2, username: 'jasonkimchi'}
            ]
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
        this.setState(state => {
            const helpers = state.helpers.concat({_id: 3, username: 'angellid'});

            return {
                helpers
            }
        });
    }

    getColour(type) {
        console.log(type);
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
                <Card style={{ width: '219px', textAlign: 'left', backgroundColor: this.getColour(this.props.note.type) }} onClick={this.handleShow}>
                    <div style={{ padding: '14px' }}>
                        <Card.Meta>{ this.props.note.date }</Card.Meta>
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
                            { this.props.note.date }
                        </Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header textAlign='left' style={{ marginBottom: '0' }}>{this.props.note.message}</Header>
                            <p style={{ color: '#8A8A8A' }}>@{this.props.note.username}</p>
                            <p>{this.props.note.details}</p>
                            { this.state.helpers.length !== 0 && this.props.note.type === 'request' ? 
                            this.state.helpers.map(helper => {
                                return (
                                    <Label key={helper._id}>{helper.username}</Label>
                                );
                            }) : '' }
                        </Modal.Description>
                        { this.props.note.type === 'request' ? 
                        <Button style={{ backgroundColor: '#2196F3', color: 'white', marginTop: '20px' }} onClick={this.handleAcceptRequest}>Accept Request</Button> : '' }
                    </Modal.Content>
                    <Modal.Actions>
                        { Meteor.user().username === this.props.note.username ? 
                        <div>
                            <Button icon>
                                <FontAwesomeIcon icon={faEdit} />
                            </Button>
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