import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a className="nav-brand" href="#">
                    <img
                        src={"https://logodix.com/logo/64439.png"}
                        alt="github_logo"
                        width="32px"
                    />
                </a>
                <input className="nav-search" type="text" placeholder="Search" />
                <span className="hide-sm">
                    <a className="nav-menu" href="#">Pull requests</a>
                    <a className="nav-menu" href="#">Issues</a>
                    <a className="nav-menu" href="#">Marketplace</a>
                    <a className="nav-menu disabled" href="#" aria-disabled="true">Explore</a>
                </span>
            </div>
        );
    }
}

export default Navbar;