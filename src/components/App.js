import React, { Component } from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import Topics from '../containers/Topics';
import Home from './Home';
import Topic from './topics/Topic';
import Cards from '../containers/Cards';
import Card from '../components/cards/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Flash Study" />
        <Switch>
          <Route exact path="/topics" component={Topics} />
          <Route exact path="/topics/:id" component={Topic} />
          <Route exact path="/topics/:tid/subjects/:sid" component={Cards} />
          <Route
            exact
            path="/topics/:tid/subjects/:sid/cards"
            component={Card}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
