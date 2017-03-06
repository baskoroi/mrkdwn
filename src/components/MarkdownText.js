import React, { Component } from 'react';

import './MarkdownText.css';

class MarkdownText extends Component {
    render() {
        return (
            <textarea
                className="MarkdownText card half text"
                ref="markdown"
                disabled>
                {this.props.text}
            </textarea>
        );
    }
}

export default MarkdownText;