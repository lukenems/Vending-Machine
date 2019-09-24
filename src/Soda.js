import React, { Component } from "react";
import { Link } from "react-router-dom";

class Soda extends Component {
  render() {
    return (
      <div>
        Soda!!!
        <p>
          <Link to="/">Go Back</Link>
        </p>
      </div>
    );
  }
}

export default Soda;
