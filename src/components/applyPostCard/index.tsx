import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";

const ApplyPostCard = (props: any) => {
    const { applyJob } = props;

    const appliedTime = new Date(applyJob.appliedTime);

    useEffect(() => {}, []);

    return (
        <>
            <ToastContainer />
            <tr>
                <td>
                    <div className="user-info">
                        <div className="user-info__img">
                            <img
                                src={applyJob.avatar}
                                alt="User Img"
                                style={{ width: "50px", height: "50px" }}
                            />
                        </div>
                        <div className="user-info__basic">
                            <h5 className="mb-0">{`${applyJob.candidateFirstName} ${applyJob.candidateLastName}`}</h5>
                            <p className="text-muted mb-0">{`${
                                new Date().getFullYear() - applyJob.yearOfBirth
                            }, ${applyJob.gender}`}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="btn btn-success">Consult</span>
                </td>
                <td>
                    <h6 className="mb-0">{applyJob.phoneNumber}</h6>
                    <a href="#!">
                        <small>Contact</small>
                    </a>
                </td>
                <td>
                    <h6 className="mb-0">{applyJob.email}</h6>
                    <a href="#!">
                        <small>Send Email</small>
                    </a>
                </td>
                <td>
                    <h6 className="mb-0">{applyJob.title}</h6>
                </td>
                <td>
                    <h6 className="mb-0">{`${appliedTime.getHours()}:${appliedTime.getMinutes()}`}</h6>
                    <small>{`${appliedTime.getDay()}/${appliedTime.getMonth()}/${appliedTime.getFullYear()}`}</small>
                </td>
            </tr>
        </>
    );
};

export default ApplyPostCard;
