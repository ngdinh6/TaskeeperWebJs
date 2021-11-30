import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { followUser, getUser } from "services/users/users.service";
import PostList from "components/PostList/index";
import { getUserWall } from "services/posts/post.service";

const UserProfile = (props: any) => {
    const params: any = useParams();
    const [userData, setUserData] = useState({} as any);
    const [userWallData, setUserWallData] = useState([] as any);

    useEffect(() => {
        try {
            const userData = getUser(params.id);
            const userWall = getUserWall(params.id);

            Promise.all([userData, userWall]).then((result) => {
                setUserData(result[0]);
                setUserWallData(result[1]);
            });
        } catch (err) {
            console.error(err);
        }
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
                                <span>Profile</span>
                            </p>
                            <h1 className="mb-3 bread">Profile</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="site-section" style={{ marginTop: 10 }}>
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-8 mb-4 mb-lg-0">
                            <div className="d-flex align-items-center">
                                <div className="border p-2 d-inline-block mr-3 rounded">
                                    <img
                                        style={{ width: 100, height: 100 }}
                                        src={userData.avatar}
                                        alt="Image"
                                    />
                                </div>
                                <div>
                                    <h2>{`${userData.firstName} ${userData.lastName}`}</h2>
                                    <div>
                                        <span className="m-2">
                                            <span className="icon-room mr-2"></span>
                                            {userData.gender}
                                        </span>
                                        <span className="ml-0 mr-2 mb-2">
                                            <span className="icon-briefcase mr-2"></span>
                                            {userData.numberOfFollower} Follower
                                        </span>
                                        <span className="ml-0 mr-2 mb-2">
                                            <span className="icon-briefcase mr-2"></span>{" "}
                                            {userData.numberOfFollowing}{" "}
                                            Following
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                {/* <div className="col-6">
                  <a href="#" className="btn btn-block btn-light btn-md">
                    <span className="icon-heart-o mr-2 text-danger"></span>Save
                    Job
                  </a>
                </div> */}
                                <div className="col-6">
                                    <a
                                        href="#"
                                        className="btn btn-block btn-primary btn-md"
                                    >
                                        Update
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a
                                        href="#"
                                        className="btn btn-block btn-outline-success btn-md"
                                        onClick={async () => {
                                            try {
                                                const result = await followUser(
                                                    userData._id
                                                );

                                                if (result) {
                                                    console.log("succes");
                                                }

                                                console.log("failed");
                                            } catch (err) {
                                                console.error(err);
                                            }
                                        }}
                                    >
                                        Follow
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <div className="p-4 border rounded">
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label
                                            className="text-black"
                                            htmlFor="fname"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            className="form-control"
                                            placeholder="Email address"
                                            value={userData.email}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label
                                            className="text-black"
                                            htmlFor="fname"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            className="form-control"
                                            placeholder="Phone number"
                                            value={`${userData.phoneNumber}`}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label
                                            className="text-black"
                                            htmlFor="fname"
                                        >
                                            Day of birth
                                        </label>
                                        <input
                                            type="number"
                                            id="fname"
                                            className="form-control"
                                            placeholder="Day of birth"
                                            value={userData.dayOfBirth}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label
                                            className="text-black"
                                            htmlFor="fname"
                                        >
                                            Month of birth
                                        </label>
                                        <input
                                            type="number"
                                            id="fname"
                                            className="form-control"
                                            placeholder="Month of birth"
                                            value={userData.monthOfBirth}
                                        />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label
                                            className="text-black"
                                            htmlFor="fname"
                                        >
                                            Year of birth
                                        </label>
                                        <input
                                            type="number"
                                            id="fname"
                                            className="form-control"
                                            placeholder="Year of birth"
                                            value={userData.yearOfBirth}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-4 border rounded">
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label
                                            className="text-black"
                                            htmlFor="fname"
                                        >
                                            Tags
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            className="form-control"
                                            placeholder="Tags"
                                        />
                                    </div>
                                </div>
                                <div className="row form-group mb-4">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label
                                            className="text-black"
                                            htmlFor="fname"
                                        >
                                            Ratings
                                        </label>
                                        <input
                                            type="password"
                                            id="fname"
                                            className="form-control"
                                            placeholder="Ratings"
                                        />
                                    </div>
                                </div>
                                <div className="row form-group mb-4">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label
                                            className="text-black"
                                            htmlFor="fname"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="password"
                                            id="fname"
                                            className="form-control"
                                            placeholder="Address"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PostList jobList={userWallData} type="List post" />
        </div>
    );
};

export default UserProfile;
