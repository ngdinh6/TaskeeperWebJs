import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import ApplyPostCardList from "components/applyPostCardList";
import { getApplicants } from "services/posts/post.service";

const ManageApplicants = (props: any) => {
    const { history } = props;
    const [applyJobList, setApplyJobList] = useState([]);

    useEffect(() => {
        getApplicants()
            .then((data) => {
                setApplyJobList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                                <span>Posts</span>
                            </p>
                            <h1 className="mb-3 bread">Manage</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="site-section">
                <div className="container">
                    <ApplyPostCardList applyJobList={applyJobList} />
                </div>
            </section>
        </div>
    );
};

export default ManageApplicants;
