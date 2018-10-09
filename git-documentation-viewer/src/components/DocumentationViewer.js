import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PerfectScrollbar from 'react-perfect-scrollbar';

//assets
import ViewerStyles from 'assets/js/DocumentationViewer.js';
import 'assets/Viewer.css';
import logo from 'assets/img/logo-simple.png';

class DocumentationViewer extends Component {
    constructor() {
        super();

        this.state = {
            tree: [],
            content: '',
            search: null,
            searchDo: false,
            version: 'master'
      };
    }

    componentWillMount() {
      if (this.props.searcher) this.searcher = this.props.searcher;
      if (this.props.builder) this.builder = this.props.builder;
      if (this.props.viewer) this.viewer = this.props.viewer;
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.appContainer}> 
                <div className={classes.headerContainer}>
                    <div className={classes.headerLogo}>
                        <img className={classes.headerLogoImg} src={logo} alt="UnTill logo" />
                    </div>

                    <div className={classes.headerSearchContainer}>
                        {this.props.searcher}
                    </div>
                </div>

                <div className={classes.mainContainer}>
                    <div className={classes.treeContainer}>
                        <PerfectScrollbar>
                            {this.props.builder}
                        </PerfectScrollbar>
                    </div>

                    <div className={classes.contentContainer}>
                        <div className={classes.content}>
                            <PerfectScrollbar>
                                <div className="content-area">
                                    {this.props.viewer}
                                </div>
                            </PerfectScrollbar>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


DocumentationViewer.propTypes = {
    classes: PropTypes.object.isRequired,
};
  

export default withStyles(ViewerStyles)(DocumentationViewer);
