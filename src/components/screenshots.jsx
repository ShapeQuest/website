import React from "react";
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";

function Screenshot({ id }) {
  return (
    <img
      className="img-responsive"
      alt="screenshot"
      src={`images/gallery/${id}.png`}
    />
  );
}

Screenshot.propTypes = {
  id: PropTypes.string.isRequired
};

function Screenshots() {
  return (
    <Carousel>
      <Screenshot id="1" />
      <Screenshot id="2" />
      <Screenshot id="3" />
      <Screenshot id="4" />
      <Screenshot id="5" />
    </Carousel>
  );
}

export default Screenshots;
