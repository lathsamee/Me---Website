import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <p>Not Found Page</p>
        <Link exact to="/">
          Home Page
        </Link>
      </div>
    );
  }
}

export default NotFound;
