import React from "react";
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

function HTML(props) {
  const { headComponents, preBodyComponents, body, postBodyComponents } = props;

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
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed"
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

export default HTML;
