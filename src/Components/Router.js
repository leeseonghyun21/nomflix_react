import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Home from "Routes/Home";
import Detail from "Routes/Detail";
import Search from "Routes/Search";
import TV from "Routes/TV";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/detail" component={Detail}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/tv" component={TV}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
