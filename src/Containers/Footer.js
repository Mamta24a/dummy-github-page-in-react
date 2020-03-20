import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <hr />
                <small>
                    <ul>
                        <li>
                            © 2020 GitHub, Inc.
                        </li>
                        <li>
                            <a href="#">Terms</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <a href="#">Security</a>
                        </li>
                        <li>
                            <a href="#">Status</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li className="margin-rl-2 hide-sm">
                            <span style={{ fontSize: "2em" }}>
                                <span style={{ color: "gainsboro" }}>
                                    <i className="fab fa-github"></i>
                                </span>
                            </span>
                        </li>
                        <li>
                            <a href="#">Contact GitHub</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">API</a>
                        </li>
                        <li>
                            <a href="#">Training</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </small>
            </footer>
        );
    }
}

export default Footer;