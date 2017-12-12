import React from "react";
import Link from "gatsby-link";

function Footer() {
  return (
    <footer className="text-center">
      ShapeQuest @2017 | theshapequest@gmail.com
      <br /> Game developed by{" "}
      <a href="http://michalczmiel.me">Aleksander Woźniak</a>
      <br /> Website created by{" "}
      <a href="http://michalczmiel.me">Michał Czmiel</a>
      <br />
      <Link to="/licenses">used licenses</Link>
    </footer>
  );
}

export default Footer;
