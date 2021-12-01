import React, { Component, useEffect, useState } from "react";

const Recruiter = (props: any) => {
    const { recruiter } = props;

    return (
        <div className="sidebar-box ">
            <div className="">
                <a
                    href={`../userProfile/${recruiter._id}`}
                    className="company-wrap"
                >
                    <img
                        src={recruiter.avatar}
                        className="img-fluid"
                        alt="Colorlib Free Template"
                    />
                </a>
                <div className="text p-3">
                    <h3>
                        <a
                            href={`../userProfile/${recruiter._id}`}
                        >{`${recruiter.firstName} ${recruiter.lastName}`}</a>
                    </h3>
                    <p>
                        <span className="number">{recruiter.numberOfJobs}</span>{" "}
                        <span>Open position</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Recruiter;
