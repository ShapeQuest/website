import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SkillIcon from "./skillIcon";
import Video from "../video";
import { OFFENSIVE, DEFENSIVE, SKILLS } from "../../data";

const Name = styled.h4`
  margin-top: 1rem;
`;

class Skills extends Component {
  state = {
    selectedCategory: OFFENSIVE,
    skills: SKILLS,
    skill: SKILLS[0],
  };

  changeCategory(category) {
    this.setState({
      selectedCategory: category,
    });
  }

  selectSkill(skill) {
    this.setState({
      skill,
    });
  }

  render() {
    const { selectedCategory, skills, skill } = this.state;
    const { name, description, video } = skill;

    const listOfSkills = skills.map(skill => (
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
          <Name>{name}</Name>
          <p>{description}</p>
        </div>
        {listOfSkills}
      </div>
    );
  }
}

export default Skills;
