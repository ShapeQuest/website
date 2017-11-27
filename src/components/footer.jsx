import React from "react";
import Link from "gatsby-link";

function Footer() {
  return (
    <footer className="text-center">
      ShapeQuest @2017 | <Link to="/contact">Contact</Link> |{" "}
      <Link to="/licenses">Used licenses</Link>
      <br /> Website created by{" "}
      <a href="http://michalczmiel.me">Michał Czmiel</a>
      <br />
    </footer>
  );
}

export default Footer;
