import React, { Component } from "react";
import { Link } from "react-router-dom";
import './VendingMachine.css'

class VendingMachine extends Component {
  render() {
    return (
      <div className="content">
        <h2>VendingMachine!!!</h2>
        <div>
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
      </div>
    );
  }
}

export default VendingMachine;
