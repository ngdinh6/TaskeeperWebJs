import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import Recruiter from "components/recruiter";
import { getTopRecruiters } from "services/users/users.service";

const RecruiterPage = (props: any) => {
    const [topRecruiters, setTopRecruiters] = useState([]);

    useEffect(() => {
        getTopRecruiters().then((data) => {
            setTopRecruiters(data);
        });
    }, []);

    const recruitersListUI = _.map(topRecruiters, (recruiter) => (
        <Recruiter recruiter={recruiter} />
    ));

    return (
        <div className="col-lg-3 sidebar">
            <div className="row justify-content-center pb-3">
                <div className="col-md-12 heading-section ">
                    <h2 className="mb-4">Top Recruiters</h2>
                </div>
            </div>
            {recruitersListUI}
        </div>
    );
};

export default RecruiterPage;
