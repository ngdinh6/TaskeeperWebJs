import React from "react";

import DefaultLayout from "components/defaultLayout/DefaultLayout.component";
import FullLayout from "components/fullLayout/FullLayout.component";

import HomePage from "pages/HomePage";
import RegisterPage from "pages/registerPage/RegisterPage";
import LoginPage from "pages/loginPage/LoginPage";

import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <FullLayout exact path="/" component={LoginPage} />
        <FullLayout exact path="/register" component={RegisterPage} />
        <DefaultLayout exact path="/homepage" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
