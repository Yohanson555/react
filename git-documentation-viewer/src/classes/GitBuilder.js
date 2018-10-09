import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import yaml from 'js-yaml';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

//actions
import * as Actions from 'actions/index';

//assets
import ViewerStyles from 'assets/js/DocumentationViewer.js';
import 'assets/Viewer.css';

class GitBuilder extends Component {
    constructor() {
        super();

        this.state = {
            version: 'master',
            versions: []
        };
    }

    componentWillMount() {
        const { user, repo, index } = this.props;

        this.user = user;
        this.repo = repo;
        this.index = index || 'tree.yml';
    }
    
    componentDidMount() {
        this.getData()
            .then((data) => {
                this.props.setState({tree: data});
            });

        this.getVersions()
            .then((versions) => {
                this.props.setState(versions);
            })
    }

    async getVersions() {
        const { user, repo } = this.props;
        const uriToFetch = `https://api.github.com/repos/${user}/${repo}/tags`;

        fetch(uriToFetch)
            .then(response => response.json())
            .then(json => {
                let versions = [];

                if (json.length > 0) {
                    versions = json.map((ver) => ver.name);
                }

                this.setState({versions});
            });
    }

    async getContent(elem) {
        const {user, repo} = this;
        const { version } = this.state;
        const uriToFetch = `https://raw.githubusercontent.com/${user}/${repo}/${version}/${elem.uri}`;
        return fetch(uriToFetch)
            .then(response => response.text())
            .then((data) => {
                return data;
            });
    }

    async getData(ver) {
        const { user, repo } = this.props;
        const version = ver || this.state.version;
        const index = this.props.index || 'tree.yml';

        const uriToFetch = `https://raw.githubusercontent.com/${user}/${repo}/${version}/${index}`;

        return fetch(uriToFetch)
          .then(response => response.text())
          .then((data) => {
            const res = yaml.safeLoad(data);

            if(res && res.pages && res.pages.length > 0) {
                return res.pages;
            }

            return []
        });
    }


    listItemClick(elem) {
        this.getContent(elem)
            .then((content) => {
                this.props.setState({content});
            });
    }

    renderVersions() {
        const { classes } = this.props;
        const { versions, version } = this.state;
        console.log('-- versions --');
        console.log(versions);
        if (versions && versions.length > 0) {
            console.log(versions);
            return (
                <Fragment>
                    <Select
                        value={version}
                        onChange={(event) => {
                            this.setState({version: event.target.value});
                            this.getData(event.target.value)
                                .then((data) => {
                                    this.props.setState({tree: data});
                                });
                            }
                        }
                        name="version"
                        displayEmpty
                        className={classes.versionSelect}
                    >
                        <MenuItem value="master">Master</MenuItem>
                        {versions.map(ver => {
                            return (
                                <MenuItem value={ver}>{ver}</MenuItem>
                            );
                        })}
                    </Select>
                    
                    <FormHelperText>Version</FormHelperText>
                </Fragment>
            );
        }
    }

    renderTree() {
        const { classes } = this.props;

        return (
            <List className={classes.treeListContainer}>
                {
                    this.props.tree.map((row, i) => {
                        if (this.props.searchDo) {

                        } else {
                            return (
                                <ListItem
                                    className={classes.treeListItem}
                                    button 
                                    key={`item_${i}`}
                                    onClick={() => this.listItemClick(row)}
                                >
                                    <ListItemText primary={row.name} />
                                </ListItem>
                            );
                        }
                    })
                }
            </List>
        );
    }

    render() {
        return (
            <Fragment>
                {this.renderVersions()}
                {this.renderTree()}
            </Fragment>
        );
    }
}

GitBuilder.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return state.view;
};

const connectedGitBuilder = connect(mapStateToProps, Actions)(GitBuilder);

export default withStyles(ViewerStyles)(connectedGitBuilder);

