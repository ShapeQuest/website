import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "spectre.css/dist/spectre.min.css";
import "spectre.css/dist/spectre-exp.min.css";
import "./index.css";
import Header from "../components/header";
import Footer from "../components/footer";

function TemplateWrapper({ children }) {
  return (
    <div>
      <Helmet
        title="ShapeQuest"
        meta={[
          { name: "description", content: "Fast-paced mobile action game" },
          {
            name: "keywords",
            content: "shapequest, android, mobile, game, fast-pased"
          }
        ]}
      />
      <Header />
      <div className="container">{children()}</div>
      <Footer />
    </div>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
