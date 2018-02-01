import React from "react";
import PropTypes from "prop-types";
import favicon from "../static/images/favicon.ico";
import ogImage from "../static/images/og-image.png";

const isProduction = process.env.NODE_ENV === "production";

let stylesStr = "";
if (isProduction) {
  try {
    stylesStr = require("!raw-loader!../public/styles.css");
  } catch (e) {
    console.log(e);
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  preBodyComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

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
        <meta
          name="keywords"
          content="shapequest, android, mobile, game, fast-pased"
        />
        <title>ShapeQuest</title>
        <link rel="shortcut icon" href={favicon} />
        <meta property="og:title" content="ShapeQuest" />
        <meta
          property="og:description"
          content="Fast-paced mobile action game"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shapequest.site/" />
        <meta property="og:image" content={ogImage} />
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

HTML.propTypes = propTypes;

export default HTML;
