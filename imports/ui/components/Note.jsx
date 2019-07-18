import React from 'react';
import { Card, Modal, Button, Popup } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            open: false,
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

    render() {
        const { open } = this.state;
        return (
                <Card style={{ width: '219px', textAlign: 'left' }} onClick={this.handleShow}>
                    <Card.Content>
                        <Card.Header style={{ paddingLeft: '0', textAlign: 'left', color: '#3D3D3D' }}>{ this.props.note.message }</Card.Header>
                        <Card.Meta>{ this.props.note.type }</Card.Meta>
                        <Card.Description>
                            This is a note.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{ textAlign: 'right' }}>
                        { this.props.note.username }
                    </Card.Content>
                    <Modal size={'mini'} open={open} onClose={this.handleClose}>
                    <Modal.Header>{this.props.note.message}</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            Something about details.
                        </Modal.Description>
                        { this.props.note.type === 'request' ? 
                        <Button style={{ backgroundColor: '#2196F3', color: 'white', marginTop: '20px' }}>Accept</Button> : '' }
                    </Modal.Content>
                    <Modal.Actions>
                        { Meteor.user().username === this.props.note.username ? 
                        <div>
                            <Button icon>
                                <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Popup trigger={<Button icon>
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