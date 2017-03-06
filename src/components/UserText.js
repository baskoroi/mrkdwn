import React, { Component } from 'react';

import './UserText.css';

class UserText extends Component {
    handleChange(text) {
        this.props.onChange(text);
    }

    render() {
        return (
            <textarea 
                className="UserText card half text"
                ref="user">{this.props.text}</textarea>
        );
    }
}

export default UserText;