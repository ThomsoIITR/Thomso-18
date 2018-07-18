import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import './App.css';

const HomeIndex = Loadable({
  loader: () => import('./components/home/Index'),
  loading: () => <div>Loading HomeIndex</div>,
});

const CAIndex = Loadable({
  loader: () => import('./components/ca/Index'),
  loading: () => <div>Loading CAIndex</div>,
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeIndex} />
          <Route path="/ca/" component={CAIndex} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
