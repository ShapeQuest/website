export const OFFENSIVE = "offensive";
export const DEFENSIVE = "defensive";
export const SKILLS = [
  {
    name: "Magnetic Beam",
    category: OFFENSIVE,
    file: "enhancegravity",
    description:
      "Shoot out magnetic beams, which pull Minions towards solid objects",
    video: "iro0SpQA6DU",
  },
  {
    name: "Shockwave",
    category: OFFENSIVE,
    file: "gravitypush",
    description: "Launch an explosive orb of energy, which pushes Minions away",
    video: "J4vEqGWc7zY",
  },
  {
    name: "Frozen Breath",
    category: OFFENSIVE,
    file: "freeze",
    description: "Breathe out a stream of wind, freezing Minions",
    video: "Lfks_12XPBw",
  },
  {
    name: "Lightning Shock",
    category: OFFENSIVE,
    file: "static",
    description:
      "Burst out a lightning impulse, shocking all Minions in its range",
    video: "x4tuUdCiq7k",
  },
  {
    name: "Meteor",
    category: OFFENSIVE,
    file: "meteor",
    description:
      "Launch an explosive missile that burst into flames on contact",
    video: "j3inmoYNfr0",
  },

  {
    name: "Black Hole",
    category: OFFENSIVE,
    file: "vortex",
    description: "Create a vortex, which sends nearby Minions into the Void",
    video: "ECKbfbcj7cI",
  },
  {
    name: "Shrink",
    category: DEFENSIVE,
    file: "shrink",
    description: "Transform into a miniature, able to squeeze through any gap",
    video: "M8AW3OIeLOc",
  },
  {
    name: "Dash",
    category: DEFENSIVE,
    file: "dash",
    description: "Perform a quick dash, sliding past enemies",
    video: "QDhqqWochmg",
  },
  {
    name: "Magnet",
    category: DEFENSIVE,
    file: "magnet",
    description: "Pull Zippies towards you, setting them free",
    video: "JW3b3D8tY1g",
  },
  {
    name: "Bubble",
    category: DEFENSIVE,
    file: "antigravity",
    description: "Shield yourself from magnetic mist",
    video: "fBDCNgbtQPo",
  },

  {
    name: "Ghost",
    category: DEFENSIVE,
    file: "ghost",
    description: "Become ethereal, able to fly through solid objects",
    video: "WQ-O2j1s4NQ",
  },
  {
    name: "Timeslow",
    category: DEFENSIVE,
    file: "slowtime",
    description: "For given duration time flows slower",
    video: "7gPM0F-mI44",
  },
];

export const INFO = [
  {
    number: "15",
    title: "Exciting levels",
    description:
      "Play through handcrafted chapters, full of enemies and obstacles",
  },
  {
    number: "12",
    title: "Unique abilities",
    description: "Use powerful skills to complete levels",
  },
  {
    number: "3",
    title: "Ways of steering",
    description: "Control Vikk with tilt, joystick or buttons",
  },
];

export const ENEMIES = [
  {
    name: "Imp",
    imageName: "imp",
    description: "The simplest Minion of Zorg",
  },
  {
    name: "Joker",
    imageName: "joker",
    description: "Beware, he might pull some tricks on you!",
  },
  {
    name: "Bomber",
    imageName: "bomber",
    description: "3... 2... 1... BOOM!",
  },
  {
    name: "Arma",
    imageName: "arma",
    description: "Explode all at once!",
  },
  {
    name: "Jumper",
    imageName: "jumper",
    description: "Don't even try to catch him...",
  },
  {
    name: "Ninja",
    imageName: "ninja",
    description: "Strikes from the shadows",
  },
];

export const GAME_MODES = [
  {
    title: "Campaign",
    description: "Fight with Zorg’s minions in 3 chapters of amazing adventure",
    list: [
      "advance through increasingly difficult handmade levels",
      "gain power by saving Zippies",
      "use Vikk’s special abilities",
      "unlock various achievements",
    ],
  },
  {
    title: "Arena",
    description: "Compete with other players in an endless Arena mode!",
    list: [
      "gather points to climb up the ranking!",
      "each stage is generated randomly – and getting harder and harder",
      "use Vikk’s abilities wisely",
      "collect special Powerups to refill abilities",
    ],
  },
  {
    title: "Rapid",
    description: "Challenge your reflex in 8 stages of Rapid mode!",
    list: [
      "with each stage Vikk is moving faster and faster",
      "stages are generated randomly",
      "gain additional SkillPoints for each completed stage",
      "you can’t use Vikk’s abilities here – use your reflex to maneuver around enemies",
    ],
  },
];
