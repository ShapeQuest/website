import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSkillIcon = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  margin: 0.1rem;

  @media only screen and (max-width: 500px) {
    width: 3rem;
    height: 3rem;
  }
`;

const propTypes = {
  file: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function SkillIcon({ file, active, onClick }) {
  const src = `images/skills/${file}${active ? "2" : ""}.png`;
  return <StyledSkillIcon onClick={onClick} src={src} alt={file} />;
}

SkillIcon.propTypes = propTypes;

export default SkillIcon;
