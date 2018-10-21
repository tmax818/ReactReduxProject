import React, { Component } from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import Topics from '../containers/Topics';
import Home from './Home';
import Topic from './topics/Topic';
import Cards from '../containers/Cards';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Flash Study" />
        <Switch>
          <Route exact path="/topics" component={Topics} />
          <Route exact path="/:topic/:id" component={Topic} />
          <Route exact path="/topics/:subject/:id" component={Cards} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
