import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div className="project-card">

                <div className="project-image-wrapper">

                  <img
                    src={projects.images[0]}
                    alt={projects.title}
                    className="project-image"
                  />

                  {projects.category && (
                    <span className="project-category">
                      {projects.category}
                    </span>
                  )}

                  {projects.status && (
                    <span className="project-status">
                      {projects.status}
                    </span>
                  )}

                </div>

                <div className="project-card-body">

                  <h5 className="project-title-settings">
                    {projects.title}
                  </h5>

                  <div className="project-tech-preview">

                    {projects.technologies &&
                      projects.technologies.slice(0,3).map((tech,index)=>(
                        <span key={index} className="project-chip">
                          {tech.name}
                        </span>
                    ))}

                  </div>

                  <button className="project-view-btn">
                    View Details →
                  </button>

                </div>

              </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
