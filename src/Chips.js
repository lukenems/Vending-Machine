import React, { Component } from "react";
import { Link } from "react-router-dom";

class Chips extends Component {
  render() {
    return (
      <div>
        Chips!!!
        <p>
          <Link to="/">Go Back</Link>
        </p>
      </div>
    );
  }
}

export default Chips;
