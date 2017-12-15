import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSection = styled.div`
  margin: 2rem;
  padding: 1rem;

  @media (max-width: 700px) {
    margin: 1rem;
    padding: 0;
  }
`;

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  title: "",
};

function Section({ title, children }) {
  return (
    <StyledSection>
      {title && <h2 className="text-center">{title}</h2>}
      {children}
    </StyledSection>
  );
}

Section.defaultProps = defaultProps;

Section.propTypes = propTypes;

export default Section;
