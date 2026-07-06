import React, { Component } from "react";
import { Icon } from "@iconify/react";
import laravelIcon from "@iconify/icons-logos/laravel";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import reactIcon from "@iconify/icons-logos/react";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={laravelIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={nodejsIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} 👋</span>

                    <h3 className="about-title">
                      Senior Software Engineer
                    </h3>

                    <p className="about-description">
                      {about}
                    </p>

                    <div className="about-highlights">

                      <div className="highlight-item">
                        ✔ 11+ Years of Professional Experience
                      </div>

                      <div className="highlight-item">
                        ✔ Enterprise Logistics & SaaS Solutions
                      </div>

                      <div className="highlight-item">
                        ✔ PHP, Laravel & CodeIgniter Expert
                      </div>

                      <div className="highlight-item">
                        ✔ Node.js & React.js Development
                      </div>

                      <div className="highlight-item">
                        ✔ OpenAI & Gemini API Integration
                      </div>

                      <div className="highlight-item">
                        ✔ REST APIs & Third-party Integrations
                      </div>

                      <div className="highlight-item">
                        ✔ Shopify & Payment Gateway Solutions
                      </div>
                      <div className="highlight-item">
                        ✔ Agile, Scrum & Team Collaboration
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
