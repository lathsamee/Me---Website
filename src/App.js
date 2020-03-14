import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

/*** COMPONENT ***/
import Home from "./Screens/Home";
import About from "./Screens/About";
import NotFoundPage from "./Screens/Notfound";
import Loading2 from "./Exports/Animetions/Loading2";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Loading2} />
        <Route path="/about" component={About} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
