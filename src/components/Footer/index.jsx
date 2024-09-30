/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="cont">
              <div className="logo">
                <a href="#0">NimeshLathiya</a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span>nlathiya40@gmail.com
                  </li>
                  <li>Ahmedabad,india</li>
                  <li>
                    <span>Phone : </span> (+91) 7405602207
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <div className="social">
                  <a
                    href="mailto:nlathiya40@gmail.com"
                    className="icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nimesh-lathiya-267558188/"
                    className="icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkdin"></i>
                  </a>
                  <a
                    href="https://github.com/NimeshLathiya"
                    className="icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://medium.com/@nlathiya40"
                    className="icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-medium"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
