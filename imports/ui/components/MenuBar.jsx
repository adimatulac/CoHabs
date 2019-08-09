import React from 'react';
import { Menu, Dropdown, Icon, Button, Sidebar, Segment } from 'semantic-ui-react';

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    render() {
        let currentUser = this.props.currentUser;
        let userDataAvailable = (currentUser !== undefined);
        let loggedIn = (currentUser && userDataAvailable);

        if (loggedIn) {
            return (
                <Menu className='fixed fixed-menu-height' style={{ backgroundColor: '#1A237E' }}>
                    <Menu.Item name='brand' style={{ fontWeight: 'bold', color: 'white', marginRight: 'auto'}}>CoHabs</Menu.Item>
                    <h4 style={{ margin: 'auto', color: 'white' }}>Hi, {currentUser.profile.fname}!</h4>
                    <Menu.Menu position='right'>
                        <Dropdown style={{ color: 'white', fontWeight: 'bold' }} floating fluid item simple icon='bars' direction='right' className='button icon'>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.props.onDashboardRedirect}>
                                    <p style={{ fontWeight: 'bold' }}>Dashboard</p>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={this.props.onProfileRedirect}>
                                    <p style={{ fontWeight: 'bold' }}>Profile</p>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={this.props.onLogout}>
                                    <p style={{ fontWeight: 'bold' }}>Log out</p>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            );
        } else {
            return (
                <Menu stackable className='fixed fixed-menu-height' style={{ backgroundColor: '#1A237E' }}>
                    <h3 style={{ margin: 'auto', color: 'white' }}>CoHabs</h3>
                </Menu>
            );
        }
    }
}