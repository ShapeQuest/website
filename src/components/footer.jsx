import React from "react";
import Link from "gatsby-link";
import facebookLogo from "../../static/images/fb.png";

function Footer() {
  return (
    <footer className="text-center">
      ShapeQuest @2017 | theshapequest@gmail.com
      <br /> Game developed by{" "}
      <a href="https://github.com/aleksanderwozniak">Aleksander Woźniak</a>
      <br /> Website created by{" "}
      <a href="http://michalczmiel.me">Michał Czmiel</a>
      <br />
      <Link href="" to="/licenses">
        used licenses
      </Link>
      <br />
      <a href="https://www.facebook.com/theshapequest/">
        <img src={facebookLogo} />
      </a>
    </footer>
  );
}

export default Footer;
