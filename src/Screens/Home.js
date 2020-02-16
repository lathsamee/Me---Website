import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container>
        <Button variant="contained" color="primary">
          Open Dialog
        </Button>
      </Container>
    );
  }
}

export default App;
