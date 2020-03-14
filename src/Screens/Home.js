import React, { Component } from "react";
import { Container, Grid, Button, Box } from "@material-ui/core";
import "../App.css";

import { Link } from "react-router-dom";
let profile = require("../assets/img/profile.jpg");

class Home extends Component {
  render() {
    return (
      <Container style={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <img src={profile} className="img" />
          </Grid>
          <Grid item xs={6}>
            <span>User name</span>
            <span>last name</span>
            <p>Address</p>
            <p>Phone</p>
            <p>Email</p>
            <p>Website</p>
            <p>OBJECTIVE</p>
          </Grid>
          <Grid item xs={12} spacing={4} style={{ textAlign: "center" }}>
            <Button>EXPERIENCE</Button>
            <Button>EDUCATION</Button>
            <Button>SKILLS</Button>
            <Button>LANGUAGE</Button>
            <Button>SOFTWARE</Button>
            <Button>CERTIFICATIONS</Button>
          </Grid>
          <Grid></Grid>
        </Grid>
      </Container>
    );
  }
}

export default Home;
