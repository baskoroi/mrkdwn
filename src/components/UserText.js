import React, { Component } from 'react';

import './UserText.css';

class UserText extends Component {
    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <textarea 
                onChange={this.handleChange.bind(this)}
                className="UserText card half text"
                ref="user"
                value={this.props.text}></textarea>
        );
    }
}

export default UserText;