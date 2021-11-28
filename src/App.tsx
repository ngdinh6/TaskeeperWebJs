import React from "react";

import DefaultLayout from "components/defaultLayout/DefaultLayout.component";
import FullLayout from "components/fullLayout/FullLayout.component";

import HomePage from "pages/HomePage";
import RegisterPage from "pages/registerPage/RegisterPage";
import LoginPage from "pages/loginPage/LoginPage";
import DetailJobPage from "pages/detailJobPage/index";
import PostJobPage from "pages/postJobPage/index";
import UserProfile from "pages/profilePage";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                <FullLayout exact path="/" component={LoginPage} />
                <FullLayout exact path="/register" component={RegisterPage} />
                <DefaultLayout exact path="/homepage" component={HomePage} />
                <DefaultLayout
                    exact
                    path="/detail-job/:id"
                    component={DetailJobPage}
                />
                <DefaultLayout
                    path="/userProfile/:id"
                    component={UserProfile}
                />
                <DefaultLayout exact path="/post-job" component={PostJobPage} />
            </Switch>
        </Router>
    );
}

export default App;
