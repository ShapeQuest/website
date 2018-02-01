import React, { Component } from "react";
import PropTypes from "prop-types";
import SkillIcon from "./skillIcon";
import Video from "../video";
import { OFFENSIVE, DEFENSIVE, SKILLS } from "../../data";

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
          <h1 style={{ marginTop: "1rem" }}>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="columns">
          <div className="col-6">
            <p className="text-uppercase" style={{ color: "#2d74b2" }}>
              {OFFENSIVE}
            </p>
            {offensiveSkills}
          </div>
          <div className="col-6">
            <p className="text-uppercase" style={{ color: "#2d74b2" }}>
              {DEFENSIVE}
            </p>
            {defensiveSkills}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
