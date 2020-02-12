import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Button style={styles.button}>kd</Button>
      </Container>
    );
  }
}

export default Home;

const styles = makeStyles({
  container: {
    background: "red"
  },
  button: {
    background: "blue"
  }
});
