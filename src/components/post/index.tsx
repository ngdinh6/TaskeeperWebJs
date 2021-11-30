import React, { Component, useEffect, useState } from "react";

const Post = (props: any) => {
    const { job } = props;

    return (
        <div className="col-md-12 ">
            <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                <div className="one-third mb-4 mb-md-0">
                    <div className="job-post-item-header align-items-center">
                        <span className="subadge">{job.jobType}</span>
                        <h2 className="mr-3 text-black">
                            <a href="#">{job.title}</a>
                        </h2>
                    </div>
                    <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                            <span className="icon-layers"></span>{" "}
                            <a href="#">Facebook, Inc.</a>
                        </div>
                        <div>
                            <span className="icon-my_location"></span>{" "}
                            <span>{job.location}</span>
                        </div>
                    </div>
                </div>

                <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                    <div>
                        <a
                            onClick={() => {}}
                            className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                            <span className="icon-heart"></span>
                        </a>
                    </div>
                    <a onClick={() => {}} className="btn btn-primary py-2">
                        Apply Job
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Post;
