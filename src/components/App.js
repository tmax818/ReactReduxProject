import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="Flash Study" />
          <Route path="/about" component={About} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
