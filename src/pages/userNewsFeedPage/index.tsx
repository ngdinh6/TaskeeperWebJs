import PostCardList from "components/postCardList";
import React, { Component, EffectCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUserNewsFeed, searchJobs } from "services/posts/post.service";

const UserNewsFeedPage = (props: any) => {
    const { history } = props;
    const [searchPostString, setSearchPostString] = useState("");
    const [postCardList, setPostCardList] = useState([] as any[]);

    useEffect(() => {
        getUserNewsFeed()
            .then((jobList) => {
                setPostCardList(jobList);
            })
            .catch((err) => {
                toast.error(err.message);
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
                                <span>Users</span>
                            </p>
                            <h1 className="mb-3 bread">News Feed</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="site-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>
                                <div className="col">
                                    <input
                                        value={searchPostString}
                                        className="form-control form-control-lg form-control-borderless"
                                        type="search"
                                        placeholder="Search jobs for keywords"
                                        onChange={(evt) => {
                                            setSearchPostString(
                                                evt.target.value
                                            );
                                        }}
                                    />
                                </div>
                                <div className="col-auto">
                                    <button
                                        className="btn btn-lg btn-primary"
                                        type="submit"
                                        onClick={() => {
                                            searchJobs(
                                                searchPostString,
                                                0,
                                                10,
                                                "",
                                                ""
                                            )
                                                .then((data) => {
                                                    setPostCardList(data);
                                                })
                                                .catch((err) => {
                                                    toast.error(err.message);
                                                });
                                        }}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <PostCardList postCardList={postCardList} />
                </div>
            </section>
        </div>
    );
};

export default UserNewsFeedPage;
