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
          minHeight: window.innerHeight - 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "40px",
          paddingBottom: "40px"
        }}
      >
        <div className="row aligner w-100">
          <div className="col-md-12 text-center">
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>

            <h1 className="mb-0 mt-3">
              <Typical steps={[name]} wrapper="p" />
            </h1>

            <div className="title-container mb-4">
              <HeaderTitleTypeAnimation />
            </div>

            {/* Resume Button */}
            <div
              style={{
                marginTop: "20px",
                marginBottom: "25px"
              }}
            >
              <a
                href="/resume/UmeshCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 30px",
                  backgroundColor: "#1f2235",
                  color: "#ffffff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                }}
              >
                <i className="fas fa-download"></i>
                Download Resume
              </a>
            </div>

            <Switch
              checked={this.state.checked}
              onChange={this.onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239"
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239"
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;