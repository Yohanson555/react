import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

//actions
import * as Actions from 'actions/index';

class GitViewer extends Component {
    render() {
        const content = this.props.content || '';
        
        return <ReactMarkdown 
            source={content}
        />;
    }
}

const mapStateToProps = (state) => {
    return state.view;
};

export default connect(mapStateToProps, Actions)(GitViewer);
