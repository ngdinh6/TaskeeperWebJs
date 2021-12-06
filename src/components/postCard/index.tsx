import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import { followUser } from "services/users/users.service";
import { ToastContainer, toast } from "react-toastify";
import moduleConfig from "module.config";
import { Markup } from "interweave";
import { applyJob } from "services/posts/post.service";

const PostCard = (props: any) => {
    const { post } = props;
    const userUrl: string = `${moduleConfig.devServer.host}/post-detail/${post._id}`;

    useEffect(() => {}, []);

    return (
        <>
            <ToastContainer />
            <div className="card gedf-card">
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img
                                    className="rounded-circle"
                                    width="45"
                                    src={post.ownerAvatar}
                                    alt=""
                                />
                            </div>
                            <div className="ml-2">
                                <div className="h5 m-0">{`@${post.ownerFirstName}`}</div>
                                <div className="h7 text-muted">
                                    {post.ownerLastName}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="dropdown">
                                <button
                                    className="btn btn-link dropdown-toggle"
                                    type="button"
                                    id="gedf-drop1"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="fa fa-ellipsis-h"></i>
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="gedf-drop1"
                                >
                                    <div className="h6 dropdown-header">
                                        Configuration
                                    </div>
                                    <a className="dropdown-item" href="#">
                                        Save
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Hide
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Report
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="text-muted h7 mb-2">
                        {" "}
                        <i className="fa fa-clock-o"></i>10 min ago
                    </div>
                    <a className="card-link" href="#">
                        <h5 className="card-title">{post.title}</h5>
                    </a>
                    <Markup content={post.description} />
                </div>
                <div className="card-footer">
                    <a href="#" className="card-link">
                        <i className="fa fa-gittip"></i> Save
                    </a>
                    <a
                        className="card-link"
                        onClick={() => {
                            applyJob(post._id, "")
                                .then((data) => {
                                    toast.success("Apply successfully");
                                })
                                .catch((err) => {
                                    toast.error(err.message);
                                });
                        }}
                    >
                        <i className="fa fa-mail-forward"></i> Apply
                    </a>
                </div>
            </div>
        </>
    );
};

export default PostCard;
