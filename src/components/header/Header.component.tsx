import React,{useEffect} from "react";

import { withRouter } from "react-router-dom";
import { Avatar,Image } from 'antd';
import * as Style from "components/header/style";

function Header() {
  useEffect(()=>{
    const token = localStorage.getItem('bearer');
    console.log(token);
  },[])
  return (
    <div className="container-fluid px-md-4	">
      <a className="navbar-brand" href="index.html">
        Taskeeper
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
          <li className="nav-item cta cta-colored">
            <Avatar className="nav-link" src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 30 ,background:'white'}} />} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Header);
