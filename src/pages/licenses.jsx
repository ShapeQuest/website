import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  margin-left: 0.2rem;
`

function LicensesPage() {
  return (
    <div className="container">
      <h1>Licenses</h1>
      <ul>
        <li>
          Framework - <StyledLink href="https://libgdx.badlogicgames.com/">libGDX</StyledLink> -
          Apache 2.0
        </li>
        <li>
          Physics engine - <StyledLink href="http://box2d.org/">Box2D</StyledLink> - zlib license
        </li>
        <li>
          Skill icons - <StyledLink href="http://game-icons.net/">game-icons.net</StyledLink> - CC
          BY 3.0 - all icons were reworked
        </li>
        <li>
          Skin -{" "}
          <StyledLink href="https://ray3k.wordpress.com/artwork/star-soldier-ui-skin-for-libgdx/">
            Star Soldier UI
          </StyledLink>{" "}
          - CC BY 4.0 - reworked and customized
        </li>
        <li>
          Other - <StyledLink href="https://www.gimp.org/">GIMP</StyledLink>, 
          <StyledLink href="https://inkscape.org/en/">Inkscape</StyledLink>, 
          <StyledLink href="http://www.audacityteam.org/">Audacity</StyledLink>, 
          <StyledLink href="http://jfxr.frozenfractal.com/">jfxr</StyledLink>   
        </li>
      </ul>

      <ul>
        Music - FreeMusicArchive
        <li>
          Broke For Free - (CC BY 3.0)
          <StyledLink href="http://freemusicarchive.org/music/broke_for_free/slam_funk">
            Slam Funk
          </StyledLink>
        </li>
        <li>
          Nihilore - (CC BY 4.0)
          <StyledLink href="http://freemusicarchive.org/music/Nihilore/Misophonia/">
            Misophonia
          </StyledLink>, (CC BY 3.0)
          <StyledLink href="http://freemusicarchive.org/music/Nihilore/A_Human_Work/">
            A Human Work
          </StyledLink>, (CC BY 3.0)
          <StyledLink href="http://freemusicarchive.org/music/Nihilore/The_Hermeneutic_Circle/">
            The Hermeneutic Circle
          </StyledLink>, (CC BY 3.0)
          <StyledLink href="http://freemusicarchive.org/music/Nihilore/Truth_And_Justification/">
            Truth And Justification
          </StyledLink>
        </li>
        <li>
          Remain - (CC BY 4.0)
          <StyledLink href="http://freemusicarchive.org/music/Remain/Acid__Alert_Remixes/">
            Acid / Alert (Remixes)
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}

export default LicensesPage;
