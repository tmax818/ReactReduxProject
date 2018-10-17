import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Topics from '../containers/Topics';
import Home from './Home';
import Study from './Study';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="Flash Study" />
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
          <Route path="/study" component={Study} />
        </div>
      </Router>
    );
  }
}

export default App;
