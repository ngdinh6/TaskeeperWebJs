import React, {
    Component,
    MouseEventHandler,
    useEffect,
    useState,
} from "react";
import { createPost, editPost, getPost } from "services/posts/post.service";
import { JobType } from "enums/post.enum";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moduleConfig from "module.config";
import { useParams } from "react-router-dom";
import _ from "lodash";

const { CKEditor } = require("@ckeditor/ckeditor5-react");
const ClassicEditor = require("@ckeditor/ckeditor5-build-classic");

const PostJobPage = (props: any) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [minSalary, setMinSalary] = useState(0);
    const [maxSalary, setMaxSalary] = useState(0);
    const [jobType, setJobType] = useState("freelance");
    const [location, setLocation] = useState("");
    const [industries, setIndustries] = useState([]);
    const [tags, setTags] = useState([]);
    const [positions, setPositions] = useState([] as string[]);
    const [skills, setSkills] = useState([]);
    const [expiredDate, setExpiredDate] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [experience, setExperience] = useState("");
    const [requirement, setRequirement] = useState("");
    const [benefits, setBenefits] = useState("");
    const [salaryType, setSalaryType] = useState("");
    const [buttonText, setButtonText] = useState("Create New Job");

    const notify = (text: any) => toast.success(text);
    const notifyError = (text: any) => toast.error(text);
    const params: any = useParams();
    const getData = (): Promise<Object> => {
        return getPost(params.id);
    };

    const saveJob = (): any => {
        if (!title || !description || !jobType) {
            notifyError("You need fill out information");
        } else {
            let postJobData = {
                title,
                description,
                requirement,
                jobType,
                tags: ["string"],
                industries: ["string"],
                positions: positions,
                skills: ["string"],
                salaryType: "Range",
                minSalary,
                maxSalary,
                location,
                responsibilities,
                experience,
                benefits,
                expiredDate: new Date(expiredDate),
            };

            if (!id) {
                createPost(postJobData)
                    .then((responseData) => {
                        const jobUrl: string = `${
                            moduleConfig.devServer.host
                        }/detail-job/${(responseData as any)._id}`;

                        notify("Post job successfully");

                        setTimeout(() => {
                            window.location.assign(jobUrl as any);
                        }, 2000);
                    })
                    .catch((err) => {
                        notifyError(err.message);
                    });
            } else {
                postJobData = _.assign(postJobData, { _id: id });

                editPost(postJobData)
                    .then((responseData) => {
                        const jobUrl: string = `${moduleConfig.devServer.host}/detail-job/${id}`;

                        notify("Edit job successfully");

                        setTimeout(() => {
                            window.location.assign(jobUrl as any);
                        }, 2000);
                    })
                    .catch((err) => {
                        notifyError(err.message);
                    });
            }
        }
    };

    useEffect(() => {
        if (!!params.id) {
            setButtonText("Edit Job");

            getData().then((data: any) => {
                try {
                    setTitle(data.title);
                    setDescription(data.description);
                    setRequirement(data.requirement);
                    setJobType(data.jobType);
                    setPositions(data.positions);
                    setSalaryType(data.salaryType);
                    setMinSalary(data.minSalary);
                    setMaxSalary(data.maxSalary);
                    setLocation(data.location);
                    setResponsibilities(data.responsibilities);
                    setExperience(data.experience);
                    setBenefits(data.benefits);
                    setExpiredDate(data.expiredDate);
                    setId(data._id);
                } catch (err) {
                    console.error();
                }
            });
        }
    }, [tags]);
    return (
        <div>
            <ToastContainer />
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

            <section className="site-section" style={{ marginTop: 10 }}>
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
                                    <p className="btn btn-block btn-primary btn-md">
                                        Create New Job
                                    </p>
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
                                            setTitle(evt.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-location">
                                        Description
                                    </label>

                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={description}
                                        onChange={(event: any, editor: any) => {
                                            const data = editor.getData();

                                            setDescription(data);
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="job-region">Job Type</label>
                                    <select
                                        className="form-control"
                                        id="job-region"
                                        data-style="btn-black"
                                        data-width="100%"
                                        data-live-search="true"
                                        title="Select Region"
                                        value={jobType}
                                        onChange={(evt) =>
                                            setJobType(evt.target.value)
                                        }
                                    >
                                        <option
                                            selected
                                            value={JobType.FREELANCE}
                                        >
                                            Freelance
                                        </option>
                                        <option value={JobType.PART_TIME}>
                                            Part time
                                        </option>
                                        <option value={JobType.FULLTIME}>
                                            Full time
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-title">Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="job-title"
                                        placeholder="Location"
                                        value={location}
                                        onChange={(evt) =>
                                            setLocation(evt.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-title">
                                        Min Salary
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="job-title"
                                        placeholder="Min Salary"
                                        value={minSalary}
                                        onChange={(evt) =>
                                            setMinSalary(
                                                parseInt(evt.target.value)
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-title">
                                        Max Salary
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="job-title"
                                        placeholder="Max Salary"
                                        value={maxSalary}
                                        onChange={(evt) =>
                                            setMaxSalary(
                                                parseInt(evt.target.value)
                                            )
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-location">
                                        Responsibilities
                                    </label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={responsibilities}
                                        onChange={(event: any, editor: any) => {
                                            const data = editor.getData();

                                            setResponsibilities(data);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-location">
                                        Requirement
                                    </label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={requirement}
                                        onChange={(event: any, editor: any) => {
                                            const data = editor.getData();

                                            setRequirement(data);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-location">
                                        Experiences
                                    </label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={experience}
                                        onChange={(event: any, editor: any) => {
                                            const data = editor.getData();

                                            setExperience(data);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-location">
                                        Benefits
                                    </label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={benefits}
                                        onChange={(event: any, editor: any) => {
                                            const data = editor.getData();

                                            setBenefits(data);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-position">
                                        Positions
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="job-title"
                                        placeholder="Positions"
                                        value={positions}
                                        onChange={(evt) =>
                                            setPositions([evt.target.value])
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-expired">
                                        Expired Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="job-expired"
                                        placeholder="Expired Date"
                                        value={expiredDate}
                                        onChange={(evt) => {
                                            setExpiredDate(evt.target.value);
                                        }}
                                    />
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
                                    <p
                                        className="btn btn-block btn-primary btn-md"
                                        onClick={() => saveJob()}
                                    >
                                        {buttonText}
                                    </p>
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
