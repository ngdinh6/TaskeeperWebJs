import { INewPostState } from "models/IPostState";
import React, {
    Component,
    MouseEventHandler,
    useEffect,
    useState,
} from "react";
import { createPost } from "services/posts/post.service";

const PostJobPage = (props: any) => {
    const [title, setTile] = useState("");
    const [description, setDescription] = useState("");
    const [jobType, setJobType] = useState("");
    const [industries, setIndustries] = useState([]);
    const [tags, setTags] = useState([]);
    const [positions, setPositions] = useState([]);
    const [skills, setSkills] = useState([]);
    const [expiredDate, setExpiredDate] = useState(new Date());
    const [requirement, setRequirement] = useState("");

    const saveJob = (): any => {
        const postJobData = {
            title,
            description,
            jobType,
            industries,
            tags,
            positions,
            skills,
            expiredDate,
            requirement,
        };

        createPost(postJobData).then((responseData) => {});
    };

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
                                <span>Post</span>
                            </p>
                            <h1 className="mb-3 bread">Post Job</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="site-section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-8 mb-4 mb-lg-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h2>Post A Job</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-6">
                                    <a
                                        href="#"
                                        className="btn btn-block btn-light btn-md"
                                    >
                                        <span className="icon-open_in_new mr-2"></span>
                                        Preview
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a
                                        href="#"
                                        className="btn btn-block btn-primary btn-md"
                                    >
                                        Create New Job
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <form
                                className="p-4 p-md-5 border rounded"
                                method="post"
                            >
                                <h3 className="text-black mb-5 border-bottom pb-2">
                                    Job Details
                                </h3>

                                <div className="form-group">
                                    <label htmlFor="company-website-tw d-block">
                                        Upload Featured Image
                                    </label>{" "}
                                    <br />
                                    <label className="btn btn-primary btn-md btn-file">
                                        br/owse File
                                        <input type="file" hidden />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-title">Job Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="job-title"
                                        placeholder="Product Designer"
                                        value={title}
                                        onChange={(evt) =>
                                            setTile(evt.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-location">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="job-location"
                                        placeholder="e.g. New York"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="job-region">
                                        Job Region
                                    </label>
                                    <select
                                        className="selectpicker border rounded"
                                        id="job-region"
                                        data-style="btn-black"
                                        data-width="100%"
                                        data-live-search="true"
                                        title="Select Region"
                                    >
                                        <option>Anywhere</option>
                                        <option>San Francisco</option>
                                        <option>Palo Alto</option>
                                        <option>New York</option>
                                        <option>Manhattan</option>
                                        <option>Ontario</option>
                                        <option>Toronto</option>
                                        <option>Kansas</option>
                                        <option>Mountain View</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="job-type">Job Type</label>
                                    <select
                                        className="selectpicker border rounded"
                                        id="job-type"
                                        data-style="btn-black"
                                        data-width="100%"
                                        data-live-search="true"
                                        title="Select Job Type"
                                        value={jobType}
                                        onChange={(evt) =>
                                            setJobType(evt.target.value)
                                        }
                                    >
                                        <option>Part Time</option>
                                        <option>Full Time</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="job-description">
                                        Job Description
                                    </label>
                                    <div className="editor" id="editor-1">
                                        <p>Write Job Description!</p>
                                    </div>
                                </div>

                                <h3 className="text-black my-5 border-bottom pb-2">
                                    Company Details
                                </h3>
                                <div className="form-group">
                                    <label htmlFor="company-name">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company-name"
                                        placeholder="e.g. New York"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company-tagline">
                                        Tagline (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company-tagline"
                                        placeholder="e.g. New York"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="job-description">
                                        Company Description (Optional)
                                    </label>
                                    <div className="editor" id="editor-2">
                                        <p>Description</p>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company-website">
                                        Website (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company-website"
                                        placeholder="https://"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company-website-fb">
                                        Facebook Username (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company-website-fb"
                                        placeholder="companyname"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company-website-tw">
                                        Twitter Username (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company-website-tw"
                                        placeholder="@companyname"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company-website-tw">
                                        Linkedin Username (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="company-website-tw"
                                        placeholder="companyname"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company-website-tw d-block">
                                        Upload Logo
                                    </label>{" "}
                                    <br />
                                    <label className="btn btn-primary btn-md btn-file">
                                        Browse File
                                        <input type="file" hidden />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-4 ml-auto">
                            <div className="row">
                                <div className="col-6">
                                    <a
                                        href="#"
                                        className="btn btn-block btn-light btn-md"
                                    >
                                        <span className="icon-open_in_new mr-2"></span>
                                        Preview
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a
                                        href="#"
                                        className="btn btn-block btn-primary btn-md"
                                        onClick={() => saveJob()}
                                    >
                                        Create New Job
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PostJobPage;
