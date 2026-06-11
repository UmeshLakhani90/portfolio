import React, { Component } from "react";

class Footer extends Component {
  render() {
    let networks = null;

    if (this.props.sharedBasicInfo) {
      networks = this.props.sharedBasicInfo.social.map((network) => (
        <span key={network.name} className="mx-3">
          <a
            href={network.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <i className={network.class}></i>
          </a>
        </span>
      ));
    }

    return (
      <footer>
        <div className="container text-center py-5">

          <h3 className="mb-3">Let's Connect</h3>

          <p className="mb-3">
            Senior Software Engineer specializing in Enterprise SaaS,
            Logistics Platforms, E-Commerce Solutions, and AI-Powered
            Applications.
          </p>

          <div className="mb-2">
            <i className="fas fa-map-marker-alt"></i>
            <span className="ml-2">Ahmedabad, Gujarat, India</span>
          </div>

          <div className="mb-2">
            <i className="fas fa-envelope"></i>
            <a
              href="mailto:lakhani.umeshk@gmail.com"
              className="ml-2"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              lakhani.umeshk@gmail.com
            </a>
          </div>
          <div className="mb-3">
            <i className="fas fa-phone"></i>
            <a
              href="tel:+918460757583"
              className="ml-2"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              +91 84607 57583
            </a>
          </div>
          <div className="mb-4">
            <i className="fas fa-briefcase"></i>
            <span className="ml-2">
              Open to Full-Time, Remote & Contract Opportunities
            </span>
          </div>

          <div className="social-links mb-4">
            {networks}
          </div>

          <hr
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              maxWidth: "500px",
              margin: "0 auto 20px"
            }}
          />

          <div className="copyright">
            <small>
              © {new Date().getFullYear()}{" "}
              {this.props.sharedBasicInfo
                ? this.props.sharedBasicInfo.name
                : "Umesh Lakhani"}
              . All Rights Reserved.
            </small>
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
