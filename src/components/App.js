import React, { Component } from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import Topics from "../containers/Topics";
import Home from "./Home";
import Study from "./Study";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Flash Study" />
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
        <Route path="/study" component={Study} />
      </div>
    );
  }
}

export default App;
