import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SkillIcon from "./skillIcon";
import Video from "../video";
import { OFFENSIVE, DEFENSIVE, SKILLS } from "../../data";

const Name = styled.h4`
  margin-top: 1rem;
`;

const GroupTitle = styled.p`
  color: #2d74b2;
  font-weight: 700;
  text-transform: uppercase;
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

    const offensiveSkills = skills
      .filter(({ category }) => category === OFFENSIVE)
      .map(skill => (
        <SkillIcon
          key={skill.file}
          onClick={() => this.selectSkill(skill)}
          active={skill.name === name}
          file={skill.file}
        />
      ));

    const defensiveSkills = skills
      .filter(({ category }) => category === DEFENSIVE)
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
          <Name>{name}</Name>
          <p>{description}</p>
        </div>
        <div className="columns">
          <div className="col-6">
            <GroupTitle>{OFFENSIVE}</GroupTitle>
            {offensiveSkills}
          </div>
          <div className="col-6">
            <GroupTitle>{DEFENSIVE}</GroupTitle>
            {defensiveSkills}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
