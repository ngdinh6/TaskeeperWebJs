import React from "react";

import { withRouter } from "react-router-dom";
import { Space, Button } from "antd";
import * as Style from "components/header/style";

function Header() {
  return (
    <div className="container-fluid px-md-4	">
      <a className="navbar-brand" href="index.html">
        Skillhunt
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu"></span> Menu
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="browsejobs.html" className="nav-link">
              Browse Jobs
            </a>
          </li>
          <li className="nav-item">
            <a href="candidates.html" className="nav-link">
              Canditates
            </a>
          </li>
          <li className="nav-item">
            <a href="blog.html" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item cta mr-md-1">
            <a href="new-post.html" className="nav-link">
              Post a Job
            </a>
          </li>
          <li className="nav-item cta cta-colored">
            <a href="job-post.html" className="nav-link">
              Want a Job
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Header);
