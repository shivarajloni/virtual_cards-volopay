import React from "react";
import NavBar from "./components/NavBar";
import Your from "./components/Your";
import All from "./components/All";
import Blocked from "./components/Blocked";
import { Route, Router } from "react-router";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router >
        <Route exact path="/" component={All} />
        <Route exact path="/your" component={Your} />
        <Route exact path="/blocked" component={Blocked} />
      </Router>
    </div>
  );
};

export default App;
