import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//modules
import DocumentationViewer from 'components/DocumentationViewer';

//classes
import Viewer from 'classes/GitViewer';
import Builder from 'classes/GitBuilder';
import Searcher from 'classes/GitSearcher';

//assets
import 'react-perfect-scrollbar/dist/css/styles.css';

class App extends Component {

  render() {
    const theme = createMuiTheme({
      palette: {
          type: 'dark'
      }
    });

    const builder = <Builder user="Yohanson555" repo="docs"/>;
    const searcher = <Searcher user="Yohanson555" repo="docs"/>;
    const viewer = <Viewer />;

    return (
      <MuiThemeProvider theme={theme}>
        <DocumentationViewer 
          viewer={viewer}
          builder={builder}
          searcher={searcher}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
