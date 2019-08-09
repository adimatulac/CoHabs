import React from 'react';
import { Card, Grid, Header, Modal, Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

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
    
    render() {
        const { open } = this.state;
        if (Meteor.users.find({_id: this.props.user}).fetch()[0] === undefined) {
            return (
                <div> nothing </div>
            )
        }
        else {  
         return (
            <Card onClick={this.handleShow}>
                <Card.Content>
                    <Grid columns={2}>
                        <Grid.Column width={12} textAlign='left'>
                            <h4 style={{ color: '#4D4D4D' }}>{ Meteor.users.find({_id: this.props.user}).fetch()[0].profile.fname } { Meteor.users.find({_id: this.props.user}).fetch()[0].profile.lname }</h4>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign='right'>
                            <FontAwesomeIcon icon={faUserCircle} size='lg' color='grey' style={{ marginLeft: 'auto' }} />
                        </Grid.Column>
                    </Grid>
                    <Card.Meta textAlign='left'>@{ Meteor.users.find({_id: this.props.user}).fetch()[0].username }</Card.Meta>
                </Card.Content>

                <Modal size={'mini'} open={open} onClose={this.handleClose} style={{ textAlign: 'left' }}>
                        <Modal.Header style={{ textAlign: 'left', fontSize: '16px', color: '#4D4D4D' }}>
                            @{ Meteor.users.find({_id: this.props.user}).fetch()[0].username }
                        </Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header textAlign='left' style={{ marginBottom: '0' }}>
                                { Meteor.users.find({_id: this.props.user}).fetch()[0].profile.fname + ' ' +
                                Meteor.users.find({_id: this.props.user}).fetch()[0].profile.lname }
                            </Header>
                            <Header>
                                <Header.Subheader style={{ textAlign: 'left' }}>
                                    <Icon name='phone' size='large' color='grey' />
                                    { Meteor.users.find({_id: this.props.user}).fetch()[0].profile.phone !== undefined ? Meteor.users.find({_id: this.props.user}).fetch()[0].profile.phone : 'No phone number entered' }
                                </Header.Subheader>
                            </Header>
                            <Header style={{ marginTop: 0 }}>
                                <Header.Subheader style={{ textAlign: 'left' }}>
                                    <Icon name='mail' size='large' color='grey' />
                                    { Meteor.users.find({_id: this.props.user}).fetch()[0].profile.email !== undefined ? Meteor.users.find({_id: this.props.user}).fetch()[0].profile.email : 'No email address entered' }
                                </Header.Subheader>
                            </Header>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Card>
            )
        }

    }
}