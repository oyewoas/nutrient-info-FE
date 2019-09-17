import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import './assets/styles/normalize.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
const routing = (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));