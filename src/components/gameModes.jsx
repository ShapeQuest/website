import React from "react";
import PropTypes from "prop-types";
import { GAME_MODES } from "../data";

function Mode({ title, description, list }) {
  return (
    <div className="column col-4 col-xs-12 col-sm-12 col-md-12">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

Mode.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired
};

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
