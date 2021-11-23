import React, { Component, useEffect } from "react";
const RecruiterPage = (props: any) => {
  return (
    <div className="col-lg-3 sidebar">
      <div className="row justify-content-center pb-3">
        <div className="col-md-12 heading-section ">
          <h2 className="mb-4">Top Recruitments</h2>
        </div>
      </div>
      <div className="sidebar-box ">
        <div className="">
          <a href="#" className="company-wrap">
            <img
              src="images/company-1.jpg"
              className="img-fluid"
              alt="Colorlib Free Template"
            />
          </a>
          <div className="text p-3">
            <h3>
              <a href="#">Company Company</a>
            </h3>
            <p>
              <span className="number">500</span> <span>Open position</span>
            </p>
          </div>
        </div>
      </div>
      <div className="sidebar-box ">
        <div className="">
          <a href="#" className="company-wrap">
            <img
              src="images/company-2.jpg"
              className="img-fluid"
              alt="Colorlib Free Template"
            />
          </a>
          <div className="text p-3">
            <h3>
              <a href="#">Facebook Company</a>
            </h3>
            <p>
              <span className="number">700</span> <span>Open position</span>
            </p>
          </div>
        </div>
      </div>
      <div className="sidebar-box ">
        <div className="">
          <a href="#" className="company-wrap">
            <img
              src="images/company-3.jpg"
              className="img-fluid"
              alt="Colorlib Free Template"
            />
          </a>
          <div className="text p-3">
            <h3>
              <a href="#">IT Programming INC</a>
            </h3>
            <p>
              <span className="number">700</span> <span>Open position</span>
            </p>
          </div>
        </div>
      </div>
      <div className="sidebar-box ">
        <div className="">
          <a href="#" className="company-wrap">
            <img
              src="images/company-4.jpg"
              className="img-fluid"
              alt="Colorlib Free Template"
            />
          </a>
          <div className="text p-3">
            <h3>
              <a href="#">IT Programming INC</a>
            </h3>
            <p>
              <span className="number">700</span> <span>Open position</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterPage;
