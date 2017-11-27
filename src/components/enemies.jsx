import React from "react";

const ENEMIES = [
  {
    name: "Imp",
    imageName: "imp",
    description: "The simplest Minion of Zorg"
  },
  {
    name: "Joker",
    imageName: "joker",
    description: "Beware, he might pull some tricks on you!"
  },
  {
    name: "Bomber",
    imageName: "bomber",
    description: "3... 2... 1... BOOM!"
  },
  {
    name: "Arma",
    imageName: "arma",
    description: "Explode all at once!"
  },
  {
    name: "Jumper",
    imageName: "jumper",
    description: "Don't even try to catch him..."
  },
  {
    name: "Ninja",
    imageName: "ninja",
    description: "Strikes from the shadows"
  }
];

class Enemies extends Component {
  state = {
    enemies: ENEMIES,
    selectedEnemy: ENEMIES[0]
  };

  render() {
    const { enemies, selectedEnemy } = this.state;
    return <div className="container">{selectedEnemy}</div>;
  }
}
