import React, { useState } from "react";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Subscribe from "./components/Subscribe";
import Profile from "./pages/Profile";
import DetailBook from "./pages/DetailBook";
import ReadBook from "./pages/ReadBook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/subscribe" component={Subscribe} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/detail-book" component={DetailBook} />
        <Route exact path="/read-book" component={ReadBook} />
        <Route exact path="/transaction" component={Transaction} />
      </Switch>
    </Router>
  );
}

export default App;
