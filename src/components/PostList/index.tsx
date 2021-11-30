import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import Post from "components/post";

const PostList = (props: any) => {
    const { jobList, type } = props;
    const [name, setName] = useState(type);
    const jobListUI = _.map(jobList, (job) => <Post job={job} />);

    return (
        <div>
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">{jobListUI}</div>
                </div>
            </section>
        </div>
    );
};

export default PostList;
