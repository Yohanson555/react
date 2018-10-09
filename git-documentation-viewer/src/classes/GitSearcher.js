import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

//actions
import * as Actions from 'actions/index';

//assets
import ViewerStyles from 'assets/js/DocumentationViewer.js';
import 'assets/Viewer.css';



class GitSearcher extends Component{
    componentWillMount() {
        this.user = this.props.user;
        this.repo = this.props.repo;
    }

    doSearch(string) {
        const {user, repo} = this;
        const uriToFetch = `https://api.github.com/search/code?q=${string} in:file repo:${user}/${repo}`
        return fetch(uriToFetch)
            .then(response => response.json())
            .then((data) => {
                if (data.total_count > 0) {
                    return data.items.map((item) => item.path);
                }

                return [];
            });
    }
  
    handleSearchKeyPress(event) {
        if (event.charCode === 13) {
            const str = event.target.value;
             
            if (this.searcher) {
                this.searcher.doSearch(str)
                    .then((result) => {
                        this.setState({
                            searchResults: result,
                            searchDo: true
                        })
                    });
            }
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <TextField
                label="Search"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onKeyPress={(event) => this.handleSearchKeyPress(event)}
            />
        );
    }
}

GitSearcher.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return state.view;
};

const connectedGitSearcher = connect(mapStateToProps, Actions)(GitSearcher);

export default withStyles(ViewerStyles)(connectedGitSearcher);