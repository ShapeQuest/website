import React from "react";

function Mode({ title, description, list }) {
  return (
    <div className="column col-4 col-xs-12 col-sm-12 col-md-12">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{list.map(item => <li>{item}</li>)}</ul>
    </div>
  );
}

function GameModes() {
  return (
    <div className="container">
      <div className="columns text-center">
        <Mode
          title="Campaign"
          description="Fight with Zorg’s minions in 3 chapters of amazing adventure"
          list={[
            "advance through increasingly difficult handmade levels",
            "gain power by saving Zippies",
            "use Vikk’s special abilities",
            "unlock various achievements"
          ]}
        />
        <Mode
          title="Arena"
          description="Compete with other players in an endless Arena mode!"
          list={[
            "gather points to climb up the ranking!",
            "each stage is generated randomly – and getting harder and harder",
            "use Vikk’s abilities wisely",
            "collect special Powerups to refill abilities"
          ]}
        />
        <Mode
          title="Rapid"
          description="Challenge your reflex in 8 stages of Rapid mode!"
          list={[
            "with each stage Vikk is moving faster and faster",
            "stages are generated randomly",
            "gain additional SkillPoints for each completed stage",
            "you can’t use Vikk’s abilities here – use your reflex to maneuver around enemies"
          ]}
        />
      </div>
    </div>
  );
}

export default GameModes;
