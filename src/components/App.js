import React, { Component } from "react";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import Topics from "../containers/Topics";
import Home from "./Home";
import Study from "./Study";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Flash Study" />
        <Switch>
          <Route path="/topics" component={Topics} />
          <Route path="/:subject" component={Study} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
