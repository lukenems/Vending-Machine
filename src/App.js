import React from "react";
import "./App.css";
import VendingMachine from "./VendingMachine";
import { BrowserRouter, Route } from "react-router-dom";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
