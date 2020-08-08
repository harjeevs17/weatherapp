import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";

import Header from "./Component/Header";
import Weather from "./Component/Weather";
import Forcast from "./Component/Foracast";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Route exact path="/weatherapp" component={Weather}></Route>
        <Route exact path="/weatherapp/forcast" component={Forcast}></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
