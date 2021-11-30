import React, { Component, useEffect, useState } from "react";

const PostList = (props: any) => {
  const { jobList, type } = props;
  const [name, setName] = useState(type);

  return (
    <div>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pr-lg-5">
              <div className="row justify-content-center pb-3">
                <div className="col-md-12 heading-section ">
                  <h2>{name}</h2>
                  <span className="subheading">{name}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Partime</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Frontend Development</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers"></span>{" "}
                          <a href="#">Facebook, Inc.</a>
                        </div>
                        <div>
                          <span className="icon-my_location"></span>{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Fulltime</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Full Stack Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers"></span>{" "}
                          <a href="#">Google, Inc.</a>
                        </div>
                        <div>
                          <span className="icon-my_location"></span>{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Freelance</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Open Source Interactive Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers"></span>{" "}
                          <a href="#">New York Times</a>
                        </div>
                        <div>
                          <span className="icon-my_location"></span>{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Partime</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Frontend Development</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers"></span>{" "}
                          <a href="#">Facebook, Inc.</a>
                        </div>
                        <div>
                          <span className="icon-my_location"></span>{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Temporary</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Open Source Interactive Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers"></span>{" "}
                          <a href="#">New York Times</a>
                        </div>
                        <div>
                          <span className="icon-my_location"></span>{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Fulltime</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Full Stack Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers"></span>{" "}
                          <a href="#">Google, Inc.</a>
                        </div>
                        <div>
                          <span className="icon-my_location"></span>{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Freelance</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Open Source Interactive Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers"></span>{" "}
                          <a href="#">New York Times</a>
                        </div>
                        <div>
                          <span className="icon-my_location"></span>{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Internship</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Frontend Development</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers"></span>{" "}
                          <a href="#">Facebook, Inc.</a>
                        </div>
                        <div>
                          <span className="icon-my_location"></span>{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 ">
                  <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                    <div className="one-third mb-4 mb-md-0">
                      <div className="job-post-item-header align-items-center">
                        <span className="subadge">Temporary</span>
                        <h2 className="mr-3 text-black">
                          <a href="#">Open Source Interactive Developer</a>
                        </h2>
                      </div>
                      <div className="job-post-item-body d-block d-md-flex">
                        <div className="mr-3">
                          <span className="icon-layers"></span>{" "}
                          <a href="#">New York Times</a>
                        </div>
                        <div>
                          <span className="icon-my_location"></span>{" "}
                          <span>Western City, UK</span>
                        </div>
                      </div>
                    </div>

                    <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                      <div>
                        <a
                          href="#"
                          className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                        >
                          <span className="icon-heart"></span>
                        </a>
                      </div>
                      <a
                        href="job-single.html"
                        className="btn btn-primary py-2"
                      >
                        Apply Job
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostList;
