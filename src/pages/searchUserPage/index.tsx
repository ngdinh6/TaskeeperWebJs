import React, { Component, useEffect, useState } from "react";
import _ from "lodash";

const SearchUsers = (props: any) => {
    useEffect(() => {}, []);

    return (
        <div>
            <div
                className="hero-wrap hero-wrap-2"
                style={{
                    backgroundImage: `url("images/bg_1.jpg")`,
                }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-start">
                        <div className="col-md-12  text-center mb-5">
                            <p className="breadcrumbs mb-0">
                                <span className="mr-3">
                                    <a href="index.html">
                                        Home{" "}
                                        <i className="ion-ios-arrow-forward"></i>
                                    </a>
                                </span>{" "}
                                <span>User</span>
                            </p>
                            <h1 className="mb-3 bread">Search Users</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section
                className="site-section"
                style={{ margin: "10px", padding: "10px" }}
            >
                <div className="container">
                    <div className="container profile-page">
                        <div className="col-xl-6 col-lg-7 col-md-12">
                            <div className="card profile-header">
                                <div className="body">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="profile-image float-md-right">
                                                {" "}
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                    alt=""
                                                />{" "}
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-12">
                                            <h4 className="m-t-0 m-b-0">
                                                <strong>Michael</strong> Deo
                                            </h4>
                                            <span className="job_post">
                                                Ui UX Designer
                                            </span>
                                            <p>
                                                795 Folsom Ave, Suite 600 San
                                                Francisco, CADGE 94107
                                            </p>
                                            <div>
                                                <button className="btn btn-primary btn-round">
                                                    Follow
                                                </button>
                                                <button className="btn btn-primary btn-round btn-simple">
                                                    Message
                                                </button>
                                            </div>
                                            <p className="social-icon m-t-5 m-b-0">
                                                <a title="Twitter">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                                <a title="Facebook">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                                <a title="Google-plus">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                                <a title="Behance">
                                                    <i className="fa fa-behance"></i>
                                                </a>
                                                <a title="Instagram">
                                                    <i className="fa fa-instagram "></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SearchUsers;
