import React, { Component } from 'react';
import marked from 'marked';

import './MarkdownText.css';

class MarkdownText extends Component {
    constructor() {
        super();
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        });
    }

    render() {
        return (
            <div
                className="MarkdownText card half text"
                ref="markdown"
                dangerouslySetInnerHTML={{ __html: marked(this.props.text || '') }}
                disabled />
        );
    }
}

export default MarkdownText;