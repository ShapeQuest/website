module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "linebreak-style": "off",
    "import/no-extraneous-dependencies": "off",
  },
  settings: {
    "import/core-modules": [],
  },
  env: {
    browser: true,
  },
};
