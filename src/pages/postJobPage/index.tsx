import { INewPostState } from "models/IPostState";
import React, {
  Component,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { createPost } from "services/posts/post.service";
import { JobType } from "enums/post.enum";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostJobPage = (props: any) => {
  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [industries, setIndustries] = useState([]);
  const [tags, setTags] = useState([]);
  const [positions, setPositions] = useState([]);
  const [skills, setSkills] = useState([]);
  const [expiredDate, setExpiredDate] = useState(new Date());
  const [responsibilities, setResponsibilities] = useState("");
  const [experience, setExperience] = useState("");
  const [requirement, setRequirement] = useState("");
  const [benefits, setBenefits] = useState("");

  const notify = (text: any) => toast.success(text);
  const notifyError = (text: any) => toast.error(text);

  const saveJob = (): any => {
    if (
      title == "" ||
      description == "" ||
      jobType == "" ||
      minSalary == 0 ||
      maxSalary == 0
    ) {
      notifyError("You need fill out information");
    } else {
      const postJobData = {
        title,
        description,
        requirement,
        jobType,
        tags: ["string"],
        industries: ["string"],
        positions: ["string"],
        skills: ["string"],
        salaryType: "Range",
        minSalary,
        maxSalary,
        location,
        responsibilities,
        experience,
        benefits,
      };
      console.log(postJobData);
      createPost(postJobData).then((responseData) => {
        notify("Post job successfully");
      });
    }
  };

  useEffect(() => {
    console.log(tags);
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
                    Home <i className="ion-ios-arrow-forward"></i>
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
                  <a href="#" className="btn btn-block btn-light btn-md">
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
              <form className="p-4 p-md-5 border rounded" method="post">
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
                    onChange={(evt) => setTile(evt.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="job-location">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="job-location"
                    placeholder="Description"
                    value={description}
                    onChange={(evt) => setDescription(evt.target.value)}
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
                    onChange={(evt) => setJobType(evt.target.value)}
                  >
                    <option selected value={JobType.FREELANCE}>
                      Freelancer
                    </option>
                    <option value={JobType.PART_TIME}>Part time</option>
                    <option value={JobType.FULLTIME}>Full time</option>
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
                    onChange={(evt) => setLocation(evt.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="job-title">Min Salary</label>
                  <input
                    type="number"
                    className="form-control"
                    id="job-title"
                    placeholder="Min Salary"
                    value={minSalary}
                    onChange={(evt) => setMinSalary(parseInt(evt.target.value))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="job-title">Max Salary</label>
                  <input
                    type="number"
                    className="form-control"
                    id="job-title"
                    placeholder="Max Salary"
                    value={maxSalary}
                    onChange={(evt) => setMaxSalary(parseInt(evt.target.value))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="job-location">Responsibilities</label>
                  <input
                    type="text"
                    className="form-control"
                    id="job-location"
                    placeholder="Responsibilities"
                    value={responsibilities}
                    onChange={(evt) => setResponsibilities(evt.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="job-location">Requirement</label>
                  <input
                    type="text"
                    className="form-control"
                    id="job-location"
                    placeholder="Requirement"
                    value={requirement}
                    onChange={(evt) => setRequirement(evt.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="job-location">Benefits</label>
                  <input
                    type="text"
                    className="form-control"
                    id="job-location"
                    placeholder="Benefits"
                    value={benefits}
                    onChange={(evt) => setBenefits(evt.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-4 ml-auto">
              <div className="row">
                <div className="col-6">
                  <a href="#" className="btn btn-block btn-light btn-md">
                    <span className="icon-open_in_new mr-2"></span>
                    Preview
                  </a>
                </div>
                <div className="col-6">
                  <p
                    className="btn btn-block btn-primary btn-md"
                    onClick={() => saveJob()}
                  >
                    Create New Job
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
