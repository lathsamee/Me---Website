import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <Container>
        <Button variant="contained" color="primary">
          Open Aboute
        </Button>
        <Link exact to="/">
          <Button>Go To Home</Button>
        </Link>
      </Container>
    );
  }
}

export default About;
