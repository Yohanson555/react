import React, { Component } from 'react';
import AppRouter from '../../routes';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <AppRouter />
      </div>
    );
  }
}

export default App;