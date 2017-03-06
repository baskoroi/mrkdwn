import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header card">
                <h1><span className="accent">m</span><sup>rkdwn</sup></h1>
                <p>
                    By:<span> </span>
                    <a href="https://github.com/baskoroi">Baskoro Indrayana</a>
                    <span> </span>-<span> </span>
                    (<a href="https://github.com/baskoroi/mrkdwn">project link</a>)
                </p>
            </div>
        );
    }
}

export default Header;