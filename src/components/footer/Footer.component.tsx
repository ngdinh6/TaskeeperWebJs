import React from "react";

import * as Style from "components/footer/style";

function Footer() {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Skillhunt Jobboard</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-twitter"></span>
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-facebook"></span>
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Employers</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="pb-1 d-block">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Employer Listing
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Resume Page
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Job Packages
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Candidate</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="pb-1 d-block">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Submit Resume
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Browse Categories
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  My Bookmarks
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Candidate Listing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Account</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="pb-1 d-block">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Create Account
                </a>
              </li>
              <li>
                <a href="#" className="pb-1 d-block">
                  Checkout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon icon-map-marker"></span>
                  <span className="text">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-phone"></span>
                    <span className="text">+2 392 3929 210</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-envelope"></span>
                    <span className="text">info@yourdomain.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center"></div>
      </div>
    </div>
  );
}

export default Footer;
