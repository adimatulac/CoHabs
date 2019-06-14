import React, { Component } from 'react';

export default class HeaderBar extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1" href="#">CoHabs</span>
                </nav>
            </div>
        )
    }
}