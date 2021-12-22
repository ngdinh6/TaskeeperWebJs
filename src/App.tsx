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
import SearchUsers from "pages/searchUserPage";
import UserNewsFeedPage from "pages/userNewsFeedPage";
import ManageApplicants from "pages/manageApplicantPage";

function App() {
    document.title = "Taskeeper - Get jobs and up works";

    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                <FullLayout exact path="/login" component={LoginPage} />
                <FullLayout exact path="/register" component={RegisterPage} />
                <DefaultLayout exact path="/" component={HomePage} />
                <DefaultLayout
                    exact
                    path="/detail-job/:id"
                    component={DetailJobPage}
                />
                <DefaultLayout
                    exact
                    path="/userProfile/:id"
                    component={UserProfile}
                />
                <DefaultLayout
                    exact
                    path="/searchUsers/:searchString"
                    component={SearchUsers}
                />
                <DefaultLayout
                    exact
                    path="/posts"
                    component={UserNewsFeedPage}
                />
                <DefaultLayout
                    exact
                    path="/manageApplicants"
                    component={ManageApplicants}
                />
                <DefaultLayout exact path="/post-job" component={PostJobPage} />
                <DefaultLayout
                    exact
                    path="/editJob/:id"
                    component={PostJobPage}
                />
            </Switch>
        </Router>
    );
}


export default App;
