import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Header title="Flash Study" />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
