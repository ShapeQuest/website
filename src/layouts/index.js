import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "spectre.css/dist/spectre.min.css";
import "spectre.css/dist/spectre-exp.min.css";
import "./index.css";

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
      <div>{children()}</div>
    </div>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
