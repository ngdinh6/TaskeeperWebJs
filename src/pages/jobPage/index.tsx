import React, { Component, useEffect } from "react";
import Recruiter from "pages/recruiterPage/index";
import PostList from "components/PostList";
const JobPage = (props: any) => {
    const { jobList, type } = props;

    return (
        <section className="ftco-section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 pr-lg-5">
                        <div className="row justify-content-center pb-3">
                            <div className="col-md-12 heading-section ">
                                <span className="subheading">
                                    Recently Added Jobs
                                </span>
                                <h2 className="mb-4">
                                    Featured Jobs Posts For This Week
                                </h2>
                            </div>
                        </div>

                        <PostList jobList={jobList} />
                    </div>
                    <Recruiter />
                </div>
            </div>
        </section>
    );
};

export default JobPage;
