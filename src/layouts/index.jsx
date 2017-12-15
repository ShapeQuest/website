import React from "react";
import PropTypes from "prop-types";
import "spectre.css/dist/spectre.min.css";
import "spectre.css/dist/spectre-exp.min.css";
import "./index.css";
import Header from "../components/header";
import Footer from "../components/footer";

const propTypes = {
  children: PropTypes.func.isRequired,
};

function TemplateWrapper({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children()}</div>
      <Footer />
    </div>
  );
}

TemplateWrapper.propTypes = propTypes;

export default TemplateWrapper;