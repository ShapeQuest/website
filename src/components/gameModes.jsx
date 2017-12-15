import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { GAME_MODES } from "../data";

const StyledDescription = styled.h5`
  color: #2d74b2;
  margin-top: 0;
`;

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Mode({ title, description, list }) {
  return (
    <div className="column col-4 col-xs-12 col-sm-12 col-md-12">
      <h3>{title}</h3>
      <StyledDescription>{description}</StyledDescription>
      <ul>
        {list.map(item => (
          <li className="text-left" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

Mode.propTypes = propTypes;

function GameModes() {
  return (
    <div className="container">
      <div className="columns text-center">
        {GAME_MODES.map(mode => <Mode {...mode} />)}
      </div>
    </div>
  );
}

export default GameModes;