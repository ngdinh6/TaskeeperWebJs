import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import ApplyPostCard from "components/applyPostCard";

const ApplyPostCardList = (props: any) => {
    const { applyJobList } = props;

    useEffect(() => {}, []);

    const postCardUI = _.map(applyJobList, (applyJob) => (
        <ApplyPostCard applyJob={applyJob} />
    ));

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Candidate</th>
                    <th>Status</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Job</th>
                    <th>Apply Time</th>
                </tr>
            </thead>
            <tbody>{postCardUI} </tbody>
        </table>
    );
};

export default ApplyPostCardList;
