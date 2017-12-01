import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Video from "./video";
import { OFFENSIVE, DEFENSIVE, SKILLS } from "../data";

const StyledSkillIcon = styled.img`
  width: 4rem;
  height: 4rem;
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
    this.setState({
      skill
    });
  }

  render() {
    const { selectedCategory, skills, skill } = this.state;
    const { name, description, video } = skill;

    const listOfSkills = skills
      .filter(({ category }) => category === selectedCategory)
      .map(skill => (
        <SkillIcon
          key={skill.file}
          onClick={() => this.selectSkill(skill)}
          active={skill.name === name}
          file={skill.file}
        />
      ));

    return (
      <div className="container text-center">
        <div>
          <Video id={video} title={name} />
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => this.changeCategory(OFFENSIVE)}
          >
            {OFFENSIVE}
          </button>
          <button
            className="btn"
            onClick={() => this.changeCategory(DEFENSIVE)}
          >
            {DEFENSIVE}
          </button>
        </div>
        {listOfSkills}
      </div>
    );
  }
}

export default Skills;
