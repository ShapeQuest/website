import React from "react";
import PropTypes from "prop-types";

function Column({ number, title, description }) {
  return (
    <div className="column col-4 col-xs-12">
      <h4>{number}</h4>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

Column.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

function Info() {
  return (
    <div className="container">
      <div className="columns text-center">
        <Column
          number="15"
          title="Exciting levels"
          description="Play through handcrafted chapters, full of enemies and obstacles"
        />
        <Column
          number="12"
          title="Unique abilities"
          description="Use powerful skills to complete levels"
        />
        <Column
          number="3"
          title="Ways of steering"
          description="Control Vikk with tilt, joystick or buttons"
        />
      </div>
    </div>
  );
}

export default Info;
