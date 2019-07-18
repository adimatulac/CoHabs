import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Button } from '@material-ui/core';

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.logout = this.logout.bind(this);
    }

    logout(e) {
        e.preventDefault();
        Meteor.logout( (err) => {
            if (err) {
                console.log(err.reason);
            } else {
                this.props.history.push('/login');
            }
        });
    }

    render() {
        let currentUser = this.props.currentUser;
        let userDataAvailable = (currentUser !== undefined);
        let loggedIn = (currentUser && userDataAvailable);

        if (loggedIn) {
            return (
                <Menu className='fixed fixed-menu-height'>
                    <Menu.Item name='brand'>CoHabs</Menu.Item>
                    <h4 style={{ margin: 'auto' }}>Hi, {currentUser.username}!</h4>
                    <Menu.Item>
                        <Button onClick={this.props.onLogout}>Logout</Button>
                    </Menu.Item>
                </Menu>
            );
        } else {
            return (
                <Menu className='fixed fixed-menu-height'>
                    <h3 style={{ margin: 'auto' }}>CoHabs</h3>
                </Menu>
            );
        }
    }
}