import React from "react";
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";
import styled from "styled-components";

const propTypes = {
  id: PropTypes.string.isRequired,
};

function Screenshot({ id }) {
  return (
    <img
      className="img-responsive"
      alt="screenshot"
      src={`images/gallery/${id}.png`}
    />
  );
}

Screenshot.propTypes = propTypes;

const StyledCarousel = styled(Carousel)`
  @media (min-width: 700px) {
    width: 70% !important;
    margin-left: auto;
    margin-right: auto;
  }
`;

function Screenshots() {
  return (
    <StyledCarousel>
      <Screenshot id="1" />
      <Screenshot id="2" />
      <Screenshot id="3" />
      <Screenshot id="4" />
      <Screenshot id="5" />
    </StyledCarousel>
  );
}

export default Screenshots;
