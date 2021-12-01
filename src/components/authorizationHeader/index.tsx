import { LocalStorageKey } from "enums/localstorage.enum";
import React, { Component, useEffect, useState } from "react";
import {
    checkAuthorization,
    getJwtUserData,
} from "services/authentication/authentication.service";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AuthorizationItemsMenu = (props: any) => {
    const { history } = props;
    const isLogin = checkAuthorization();
    let userData: any;

    function refreshPage() {
        window.location.reload();
    }

    if (isLogin) {
        userData = getJwtUserData();

        return (
            <>
                <ToastContainer />
                <li className="nav-item cta mr-md-1">
                    <a href="../post-job" className="nav-link">
                        Post a Job
                    </a>
                </li>
                <li className="nav-item cta cta-colored">
                    <a href="job-post.html" className="nav-link">
                        Want a Job
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">{`${userData.firstName}, how are you?`}</a>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Profile
                    </a>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                    >
                        <a className="dropdown-item" href="#">
                            My user profile
                        </a>
                        <a className="dropdown-item" href="#">
                            Settings
                        </a>
                        <div className="dropdown-divider"></div>
                        <a
                            className="dropdown-item"
                            onClick={() => {
                                toast.warning("Logout successfully");

                                localStorage.setItem(
                                    LocalStorageKey.BEARER,
                                    ""
                                );
                                setInterval(() => {
                                    refreshPage();
                                }, 1000);
                            }}
                        >
                            Logout
                        </a>
                    </div>
                </li>
            </>
        );
    }

    return (
        <>
            <ToastContainer />
            <li className="nav-item cta mr-md-1">
                <a href="../login" className="nav-link">
                    Login
                </a>
            </li>
            <li className="nav-item cta cta-colored">
                <a href="../register" className="nav-link">
                    Register
                </a>
            </li>
        </>
    );
};

export default AuthorizationItemsMenu;
