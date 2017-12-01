import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ENEMIES } from "../data";

function Enemy({ name, imageName, description }) {
  return (
    <div className="tile column col-4 col-xs-12 col-sm-12 col-md-4 col-lg-2">
      <div className="tile-icon">
        <img alt={name} src={`images/bestiary/${imageName}.png`} />
      </div>
      <div className="tile-content">
        <p className="tile-title">{name}</p>
        <p className="tile-subtitle text-gray">{description}</p>
      </div>
    </div>
  );
}

Enemy.propTypes = {
  name: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

function Enemies() {
  return (
    <div className="container">
      <div className="columns">
        {ENEMIES.map(enemy => <Enemy {...enemy} />)}
      </div>
    </div>
  );
}

export default Enemies;
