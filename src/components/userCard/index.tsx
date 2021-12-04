import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import { followUser } from "services/users/users.service";
import { ToastContainer, toast } from "react-toastify";
import moduleConfig from "module.config";

const UserCard = (props: any) => {
    const { user } = props;
    const userUrl: string = `${moduleConfig.devServer.host}/userProfile/${user._id}`;

    useEffect(() => {}, []);

    return (
        <>
            <ToastContainer />
            <div
                className="col-xl-5 col-lg-7 col-md-12"
                style={{ margin: "20px" }}
            >
                <div className="card profile-header">
                    <div className="body">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div
                                    className="profile-image float-md-right"
                                    style={{ marginTop: "2px" }}
                                    onClick={() => {
                                        window.location.assign(userUrl);
                                    }}
                                >
                                    {" "}
                                    <img
                                        src={user.avatar}
                                        alt=""
                                        width="100"
                                        height="100"
                                    />{" "}
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                                <h4
                                    className="m-t-0 m-b-0"
                                    onClick={() => {
                                        window.location.assign(userUrl);
                                    }}
                                >
                                    <strong>{user.firstName}</strong>{" "}
                                    {user.lastName}
                                </h4>
                                <span className="job_post">
                                    {user.description || "Ui UX Designer"}
                                </span>
                                <p>
                                    {user.location ||
                                        "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107"}
                                </p>
                                <div>
                                    <button
                                        className="btn btn-primary btn-round"
                                        style={{ marginRight: "2px" }}
                                        onClick={() => {
                                            followUser(user._id)
                                                .then((result) => {
                                                    toast.success(
                                                        "Follow successfully"
                                                    );
                                                })
                                                .catch((err) => {
                                                    toast.error(err.message);
                                                });
                                        }}
                                    >
                                        Follow
                                    </button>
                                    <button
                                        className="btn btn-primary btn-round btn-simple"
                                        style={{ marginLeft: "2px" }}
                                    >
                                        Message
                                    </button>
                                </div>
                                <p
                                    className="social-icon m-t-5 m-b-0"
                                    style={{ marginTop: "10px" }}
                                >
                                    <a
                                        title="Twitter"
                                        href="javascript:void(0);"
                                        style={{ marginLeft: "10px" }}
                                    >
                                        <i className="icon-twitter"></i>
                                    </a>
                                    <a
                                        title="Facebook"
                                        href="javascript:void(0);"
                                        style={{ marginLeft: "10px" }}
                                    >
                                        <i className="icon-facebook"></i>
                                    </a>
                                    <a
                                        title="Google-plus"
                                        href="javascript:void(0);"
                                        style={{ marginLeft: "10px" }}
                                    >
                                        <i className="icon-google"></i>
                                    </a>
                                    <a
                                        title="Behance"
                                        href="javascript:void(0);"
                                        style={{ marginLeft: "10px" }}
                                    >
                                        <i className="icon-behance"></i>
                                    </a>
                                    <a
                                        title="Instagram"
                                        href="javascript:void(0);"
                                        style={{ marginLeft: "10px" }}
                                    >
                                        <i className="icon-instagram "></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserCard;
