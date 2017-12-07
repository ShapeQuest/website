import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Video from "../components/video";
import Info from "../components/info";
import GameModes from "../components/gameModes";
import Screenshots from "../components/screenshots";
import Skills from "../components/skills";
import Enemies from "../components/enemies";

const StyledSection = styled.div`
  margin: 2rem;
  padding: 1rem;

  @media (max-width: 700px) {
    margin: 1rem;
    padding: 0;
  }
`;

function Section({ title, children }) {
  return (
    <StyledSection>
      {title && <h2 className="text-center">{title}</h2>}
      {children}
    </StyledSection>
  );
}

Section.defaultProps = {
  title: ""
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

function IndexPage() {
  return (
    <div>
      <Video id="f-VGyZFygd8" title="Intro" />
      <Section>
        <Info />
      </Section>
      <Section title="Game modes">
        <GameModes />
      </Section>
      <Screenshots />
      <Section title="Skills">
        <Skills />
      </Section>
      <Section title="Enemies">
        <Enemies />
      </Section>
    </div>
  );
}

export default IndexPage;
