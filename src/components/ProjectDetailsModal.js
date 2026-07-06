import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "../scss/project-modal.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class ProjectDetailsModal extends Component {
  render() {
    // -------------------------
// Project Data
// -------------------------

const project = this.props.data || {};

const {
  title = "",
  category = "",
  description = "",
  url = "",
  images = [],
  technologies = [],

  role = "",
  company = "",
  client = "",
  duration = "",
  domain = "",
  status = "",

  responsibilities = [],
  features = [],
  businessImpact = []
} = project;

// -------------------------
// Technologies
// -------------------------

const tech = technologies.map((item, index) => (
  <span className="tech-badge" key={index}>
    {item.class && (
      <i
        className={item.class}
        style={{ marginRight: "8px" }}
      ></i>
    )}
    {item.name}
  </span>
));

// -------------------------
// Images
// -------------------------

const img = images.map((image, index) => (
  <div key={index} data-src={image} className="project-slide" />
));
    return (
      <Modal
        {...this.props}
        size="xl"
        dialogClassName="project-modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto project-content" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto project-content">
            <div className="project-header">
              <div>
                <h2 className="project-title">
                  {title}

                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </h2>

                <span className="project-type">
                  {project.category && (
                  <span className="project-type">
                    {project.category}
                  </span>
                )}
                </span>
                <div className="project-info-grid">
                  <div className="info-card">
                    <i className="fas fa-user-tie"></i>
                    <div>
                      <span>Role</span>
                      <strong>{role}</strong>
                    </div>
                  </div>

                  <div className="info-card">
                    <i className="fas fa-building"></i>
                    <div>
                      <span>Company</span>
                      <strong>{company}</strong>
                    </div>
                  </div>

                  {client && (
                    <div className="info-card">
                      <i className="fas fa-globe"></i>
                      <div>
                        <span>Client</span>
                        <strong>{client}</strong>
                      </div>
                    </div>
                  )}

                  {duration && (
                    <div className="info-card">
                      <i className="far fa-calendar-alt"></i>
                      <div>
                        <span>Duration</span>
                        <strong>{duration}</strong>
                      </div>
                    </div>
                  )}
                  {domain && (
                    <div className="info-card">
                      <i className="fas fa-layer-group"></i>
                      <div>
                        <span>Domain</span>
                        <strong>{domain}</strong>
                      </div>
                    </div>
                  )}

                  {status && (
                    <div className="info-card">
                      <i className="fas fa-check-circle"></i>
                      <div>
                        <span>Status</span>
                        <strong>{status}</strong>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="overview-card">
              <h5>
                <i className="fas fa-file-alt"></i> Project Overview
              </h5>

              <p>{description}</p>
            </div>
            {responsibilities.length > 0 && (
            <div className="overview-card">
              <h5>
                <i className="fas fa-tasks"></i> Responsibilities
              </h5>

              <div className="project-list">
                {responsibilities.map((item, index) => (
                  <div className="project-item" key={index}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {features.length > 0 && (
  <div className="overview-card">
    <h5>
      <i className="fas fa-star"></i> Key Features
    </h5>

    <div className="project-list">
      {features.map((item, index) => (
        <div className="project-item" key={index}>
          <i className="fas fa-check-circle"></i>
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
)}
{businessImpact.length > 0 && (
  <div className="overview-card">
    <h5>
      <i className="fas fa-chart-line"></i> Business Impact
    </h5>

    <div className="project-list">
      {businessImpact.map((item, index) => (
        <div className="project-item" key={index}>
          <i className="fas fa-check-circle"></i>
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
)}
            <div className="project-tech-section">
              <h5 className="section-heading">
                <i className="fas fa-code"></i> Technology Stack
              </h5>

              <div className="tech-container">
                {tech}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
