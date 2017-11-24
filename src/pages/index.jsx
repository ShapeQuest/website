import React from "react";
import Video from "../components/video";
import Info from "../components/info";
import GameModes from "../components/gameModes";
import Screenshots from "../components/screenshots";
import Skills from "../components/skills";

function IndexPage() {
  return (
    <div>
      <Video src="https://www.youtube.com/embed/f-VGyZFygd8?showinfo=0&controls=0&rel=0&modestbranding=1" />
      <Info />
      <GameModes />
      <Screenshots />
      <Skills />
    </div>
  );
}

export default IndexPage;
