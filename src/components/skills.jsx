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

const StyledCategoryButton = styled.button`
  background-color: #ececec !important;
  color: #333 !important;
  border-color: #888 !important;
`;

function CategoryButton({ value, onClick }) {
  return (
    <StyledCategoryButton className="btn" onClick={onClick}>
      {value}
    </StyledCategoryButton>
  );
}

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
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
        {listOfSkills}
      </div>
    );
  }
}

export default Skills;
