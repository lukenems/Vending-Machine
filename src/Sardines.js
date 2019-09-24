import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sardines extends Component {
  render() {
    return (
      <div>
        Sardines!!!
        <p>
          <Link to="/">Go Back</Link>
        </p>
      </div>
    );
  }
}

export default Sardines;
