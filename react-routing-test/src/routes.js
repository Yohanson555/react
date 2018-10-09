import React from 'react';
import { Switch, Route }  from 'react-router';
import App from './components/App';
import CounterPage from './components/CounterPage';
import HelloWorldPage from './components/HelloWorldPage';
import TimePage from './components/TimePage';

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={HelloWorldPage} exact path='/'/>
        <Route component={CounterPage} path='/counters' />
        <Route component={TimePage} path='/time' />
      </Switch>
    );
  }
}

export default AppRouter;