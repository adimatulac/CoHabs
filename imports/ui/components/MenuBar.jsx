import React from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';

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
                <Menu className='fixed fixed-menu-height' style={{ backgroundColor: '#155492' }}>
                    <Menu.Item name='brand' style={{ fontWeight: 'bold', color: 'white', marginRight: 'auto' }}>CoHabs</Menu.Item>
                    <h4 style={{ margin: 'auto', color: 'white' }}>Hi, {currentUser.profile.fname}!</h4>
                    <Menu.Menu position='right'>
                        <Dropdown style={{ color: 'white', fontWeight: 'bold' }} item simple icon='bars' direction='right'>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.props.onDashboardRedirect} style={{ textAlign: 'right' }}>
                                    <p style={{ fontWeight: 'bold' }}>Dashboard</p>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={this.props.onProfileRedirect} style={{ textAlign: 'right' }}>
                                    <p style={{ fontWeight: 'bold' }}>Profile</p>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={this.props.onLogout} style={{ textAlign: 'right' }}>
                                    <p style={{ fontWeight: 'bold' }}>LOGOUT</p>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            );
        } else {
            return (
                <Menu className='fixed fixed-menu-height' style={{ backgroundColor: '#155492' }}>
                    <h3 style={{ margin: 'auto', color: 'white' }}>CoHabs</h3>
                </Menu>
            );
        }
    }
}