import React, { Component } from "react";
import { Link } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div>
        VendingMachine!!!
        <p>
          <Link to="/chips">Chips!</Link>
        </p>
        <p>
          <Link to="/sardines">Sardines!</Link>
        </p>
        <p>
          <Link to="/soda">Soda!</Link>
        </p>
      </div>
    );
  }
}

export default VendingMachine;
