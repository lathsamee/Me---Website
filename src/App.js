import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

/*** COMPONENT ***/
import Home from "./Screens/Home";
import NotFoundPage from "./Screens/Notfound";
import Loading4 from "./Exports/Animetions/Loading4";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
