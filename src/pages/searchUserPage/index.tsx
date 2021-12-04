import React, { Component, useEffect, useState } from "react";
import _ from "lodash";
import { searchUsers } from "services/users/users.service";
import UserCardList from "components/userCardList";
import { useParams } from "react-router-dom";

const SearchUsers = (props: any) => {
    const { history } = props;
    const params = useParams();

    const [userList, setUserList] = useState([]);
    const [searchCandidate, setSearchCandidate] = useState("");

    useEffect(() => {
        searchUsers((params as any).searchString, 0, 10).then((data) => {
            setUserList(data);
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
                            <h1 className="mb-3 bread">Search Users</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="tab-pane fade"
                id="v-pills-2"
                role="tabpanel"
                aria-labelledby="v-pills-performance-tab"
            >
                <form action="#" className="search-job">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group">
                                <div className="form-field">
                                    <div className="icon">
                                        <span className="icon-user"></span>
                                    </div>
                                    <input
                                        value={searchCandidate}
                                        type="text"
                                        className="form-control"
                                        placeholder="eg. Adam Scott"
                                        onChange={(evt) => {
                                            setSearchCandidate(
                                                evt.target.value
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <div className="form-field">
                                    <button
                                        type="submit"
                                        className="form-control btn btn-primary"
                                        onClick={() => {}}
                                    >
                                        Search Users
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <section className="site-section">
                <div className="container">
                    <UserCardList userList={userList} />
                </div>
            </section>
        </div>
    );
};

export default SearchUsers;
