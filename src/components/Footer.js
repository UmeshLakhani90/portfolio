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

          <h3 className="mb-3">
            Let's Build Something Great Together{" "}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </h3>

          <p className="mb-3">
            Senior Software Engineer with 10+ years of experience building enterprise logistics platforms, AI-powered applications, scalable REST APIs, and eCommerce solutions.
          </p>

          <div className="mb-3">
            <i className="fas fa-map-marker-alt"></i>
            <span className="ml-2">Ahmedabad, Gujarat, India</span>
          </div>

          <div className="mb-3">
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
          <div className="mb-3">
            <i className="fab fa-github"></i>
            <a
              href="https://github.com/UmeshLakhani90"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              github.com/UmeshLakhani90
            </a>
          </div>
          <div className="mb-4">
            <i className="fas fa-briefcase"></i>
            <span className="ml-2">
              Open to Full-Time, Remote & Contract Opportunities
            </span>
          </div>
          <div className="footer-actions mb-4">
            <a
              href="/resume/UmeshCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-resume-btn"
            >
              <i className="fas fa-file-pdf"></i>
              Download Resume
            </a>
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
              © {new Date().getFullYear()} Umesh Lakhani.
              All rights reserved for original content, projects and personal branding.
            </small>

            <div className="mt-2">
              <small>
                Original template:{" "}
                <a
                  href="https://github.com/Dorota1997/react-frontend-dev-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  Dorota Gil
                </a>
                {" "} | Licensed under MIT License.
              </small>
            </div>
          </div>


        </div>
      </footer>
    );
  }
}

export default Footer;
