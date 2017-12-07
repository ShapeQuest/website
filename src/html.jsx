import React from "react";
import PropTypes from "prop-types";
import favicon from "../static/images/favicon.ico";

const isProduction = process.env.NODE_ENV === "production";

let stylesStr = "";
if (isProduction) {
  try {
    stylesStr = require("!raw-loader!../public/styles.css");
  } catch (e) {
    console.log(e);
  }
}

function HTML({ headComponents, preBodyComponents, body, postBodyComponents }) {
  const css = isProduction && (
    <style
      id="gatsby-inlined-css"
      dangerouslySetInnerHTML={{ __html: stylesStr }}
    />
  );

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Website for ShapeQuest - fast paced mobile action game"
        />
        <title>ShapeQuest</title>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href={favicon} />
        {headComponents}
        {css}
      </head>
      <body>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  headComponents: PropTypes.node.isRequired,
  preBodyComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired
};

export default HTML;
