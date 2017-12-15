import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const StyledBadge = styled.img`
  width: 15rem;
  margin-top: -2rem;

  :hover {
    transform: translateY(-2px);
  }
`;

function Badge({ src, alt }) {
  return (
    <div className="text-center">
      <a href="https://play.google.com/store/apps/details?id=com.olq.games.shapequest">
        <StyledBadge src={src} alt={alt} />
      </a>
    </div>
  );
}

Badge.propTypes = propTypes;

export default Badge;
