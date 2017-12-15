import React from "react";

import Section from "../components/section";
import Video from "../components/video";
import Info from "../components/info";
import GameModes from "../components/gameModes";
import Screenshots from "../components/screenshots";
import Skills from "../components/skills";
import Enemies from "../components/enemies";
import Badge from "../components/badge";
import badgeSrc from "../../static/images/badge.png";

function IndexPage() {
  return (
    <div>
      <Badge src={badgeSrc} alt="android badge" />
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