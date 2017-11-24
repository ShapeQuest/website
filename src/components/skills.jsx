import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const OFFENSIVE = "offensive";
const DEFENSIVE = "defensive";
const SKILLS = [
  {
    name: "Magnetic Beam",
    category: OFFENSIVE,
    file: "enhancegravity",
    description:
      "Shoot out magnetic beams, which pull Minions towards solid objects",
    video: "iro0SpQA6DU"
  },
  {
    name: "Shockwave",
    category: OFFENSIVE,
    file: "gravitypush",
    description: "Launch an explosive orb of energy, which pushes Minions away",
    video: "J4vEqGWc7zY"
  },
  {
    name: "Frozen Breath",
    category: OFFENSIVE,
    file: "freeze",
    description: "Breathe out a stream of wind, freezing Minions",
    video: "Lfks_12XPBw"
  },
  {
    name: "Lightning Shock",
    category: OFFENSIVE,
    file: "static",
    description:
      "Burst out a lightning impulse, shocking all Minions in its range",
    video: "x4tuUdCiq7k"
  },
  {
    name: "Meteor",
    category: OFFENSIVE,
    file: "meteor",
    description:
      "Launch an explosive missile that burst into flames on contact",
    video: "j3inmoYNfr0"
  },

  {
    name: "Black Hole",
    category: OFFENSIVE,
    file: "vortex",
    description: "Create a vortex, which sends nearby Minions into the Void",
    video: "ECKbfbcj7cI"
  },
  {
    name: "Shrink",
    category: DEFENSIVE,
    file: "shrink",
    description: "Transform into a miniature, able to squeeze through any gap",
    video: "M8AW3OIeLOc"
  },
  {
    name: "Dash",
    category: DEFENSIVE,
    file: "dash",
    description: "Perform a quick dash, sliding past enemies",
    video: "QDhqqWochmg"
  },
  {
    name: "Magnet",
    category: DEFENSIVE,
    file: "magnet",
    description: "Pull Zippies towards you, setting them free",
    video: "JW3b3D8tY1g"
  },
  {
    name: "Bubble",
    category: DEFENSIVE,
    file: "antigravity",
    description: "Shield yourself from magnetic mist",
    video: "fBDCNgbtQPo"
  },

  {
    name: "Ghost",
    category: DEFENSIVE,
    file: "ghost",
    description: "Become ethereal, able to fly through solid objects",
    video: "WQ-O2j1s4NQ"
  },
  {
    name: "Timeslow",
    category: DEFENSIVE,
    file: "slowtime",
    description: "For given duration time flows slower",
    video: "7gPM0F-mI44"
  }
];

const StyledSkillIcon = styled.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  margin: 0.1rem;
`;

function SkillIcon({ file, active, onClick }) {
  const src = `images/skills/${file}${active ? "2" : ""}.png`;
  return <StyledSkillIcon onClick={onClick} src={src} />;
}

SkillIcon.propTypes = {
  file: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

class Skills extends Component {
  state = {
    selectedCategory: OFFENSIVE,
    skills: SKILLS,
    skill: SKILLS[0]
  };

  changeCategory(category) {
    this.setState({
      selectedCategory: category
    });
  }

  selectSkill(skill) {
    console.log("test");
    this.setState({
      skill
    });
  }

  render() {
    const { selectedCategory, skills, skill } = this.state;
    const { name, description } = skill;
    return (
      <div className="container text-center">
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => this.changeCategory(OFFENSIVE)}
          >
            OFFENSIVE
          </button>
          <button
            className="btn"
            onClick={() => this.changeCategory(DEFENSIVE)}
          >
            DEFENSIVE
          </button>
        </div>
        {skills.map(
          skill =>
            selectedCategory === skill.category && (
              <SkillIcon
                onClick={() => this.selectSkill(skill)}
                active={skill.name === name}
                file={skill.file}
              />
            )
        )}
      </div>
    );
  }
}

export default Skills;
