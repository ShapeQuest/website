import React from "react";
import PropTypes from "prop-types";

function Mode({ title, description, list }) {
  return (
    <div className="column col-4 col-xs-12 col-sm-12 col-md-12">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

Mode.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired
};

const GAME_MODES = [
  {
    title: "Campaign",
    description: "Fight with Zorg’s minions in 3 chapters of amazing adventure",
    list: [
      "advance through increasingly difficult handmade levels",
      "gain power by saving Zippies",
      "use Vikk’s special abilities",
      "unlock various achievements"
    ]
  },
  {
    title: "Arena",
    description: "Compete with other players in an endless Arena mode!",
    list: [
      "gather points to climb up the ranking!",
      "each stage is generated randomly – and getting harder and harder",
      "use Vikk’s abilities wisely",
      "collect special Powerups to refill abilities"
    ]
  },
  {
    title: "Rapid",
    description: "Challenge your reflex in 8 stages of Rapid mode!",
    list: [
      "with each stage Vikk is moving faster and faster",
      "stages are generated randomly",
      "gain additional SkillPoints for each completed stage",
      "you can’t use Vikk’s abilities here – use your reflex to maneuver around enemies"
    ]
  }
];

function GameModes() {
  return (
    <div className="container">
      <div className="columns text-center">
        {GAME_MODES.map(mode => <Mode {...mode} />)}
      </div>
    </div>
  );
}

export default GameModes;
