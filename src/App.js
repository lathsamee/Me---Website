import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

/*** COMPONENT ***/
import Home from "./Screens/Home";
import About from "./Screens/About";
import NotFoundPage from "./Screens/Notfound";
import Loading4 from "./Exports/Animetions/Loading4";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
