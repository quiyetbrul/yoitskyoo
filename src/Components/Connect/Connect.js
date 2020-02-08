import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <div className="footer" id="connect">
      <div className="whitespace"></div>
      <div className="whitespace"></div>
      <div className="container">
        <br />
        <br />

        <div className="collab">
          <div className="row">
            <div className="col-lg-12">
              <p className="wow fadeInUp">
                Got an interesting project? I can help you.
              </p>
            </div>
          </div>
        </div>

        <br />

        <div className="hr">
          <div className="row"></div>
        </div>

        <br />
        <br />

        <div className="info">
          <div className="row">
            <div className="col-lg-4" id="media">
              <p className="wow fadeInUp">connect with me</p>

              <ul>
                <li id="ig" className="wow fadeInUp" data-wow-delay="0.6s">
                  <a
                    href="http://instagram.com/yoitskyoo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ig
                  </a>
                </li>
                <li
                  id="linkedin"
                  className="wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <a
                    href="http://bit.ly/QBLINKED"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin
                  </a>
                </li>
                <li id="github" className="wow fadeInUp" data-wow-delay="1s">
                  <a
                    href="http://bit.ly/QBGITHUB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                </li>
              </ul>
              <br />
              <br />
            </div>

            <div className="col-lg-8" id="address">
              <p className="wow fadeInUp" data-wow-delay="0s">
                say hello
              </p>
              <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                <a
                  href="mailto:qbrul0514@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  qbrul0514@gmail.com
                </a>
              </h4>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
