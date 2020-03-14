import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

/*** COMPONENT ***/
import Home from "./Screens/Home";
import About from "./Screens/About";
import NotFoundPage from "./Screens/Notfound";
import Loading3 from "./Exports/Animetions/Loading3";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Loading3} />
        <Route path="/about" component={About} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
