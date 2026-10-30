import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    const dataThemeAttribute = "data-theme";
    const body = document.body;

    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark"
        ? "light"
        : "dark";

    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    let name = "";

    if (this.props.sharedData) {
      name = this.props.sharedData.name;

      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => (
        <Typical
          className="title-styles"
          steps={this.titles}
          loop={50}
        />
      ),
      () => true
    );

    return (
      <header
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "80px",
          paddingBottom: "40px"
        }}
      >
        <div className="row aligner w-100">
          <div className="col-md-12 text-center">
            <span
              className="iconify header-icon"
              data-icon="mdi:code-braces-box"
              data-inline="false"
            ></span>

            <h1 className="mb-0 mt-3">
              <Typical steps={[name]} wrapper="p" />
            </h1>

            <div className="title-container mb-4">
              <HeaderTitleTypeAnimation />
            </div>
            {/* <p className="hero-subtitle">
              11+ Years • Enterprise SaaS • AI Integration • REST APIs • Logistics Solutions
            </p> */}
            <p className="hero-stack">
              PHP • Laravel • Node.js • React.js • MySQL • AI Integration
            </p>

            {/* Resume Button */}
            <div className="hero-actions">
              <a
                href="/resume/UmeshCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
              >
                <i className="fas fa-file-pdf"></i>
                Download Resume
              </a>
            </div>
            <div className="hero-footer">
              <div className="availability-badge">
                <i className="fas fa-circle"></i>
                Available for Full-Time • Remote • Ahmedabad
              </div>

              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="mdi:weather-night"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px"
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="mdi:white-balance-sunny"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px"
                    }}
                  ></span>
                }
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;