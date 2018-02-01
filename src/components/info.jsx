import React from "react";
import PropTypes from "prop-types";

import { INFO } from "../data";

const propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function Column({ number, title, description }) {
  return (
    <div className="column col-4 col-xs-12 col-sm-12 col-md-12">
      <h4 style={{ color: "#2d74b2", fontSize: "3rem" }}>{number}</h4>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

Column.propTypes = propTypes;

function Info() {
  return (
    <div className="container">
      <div className="columns text-center">
        {INFO.map(info => <Column key={info.title} {...info} />)}
      </div>
    </div>
  );
}

export default Info;
