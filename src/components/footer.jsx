import React from "react";
import Link from "gatsby-link";
import facebookLogo from "../../static/images/fb.png";

function Footer() {
  return (
    <footer className="text-center">
      ShapeQuest @2018 | wozappz@gmail.com
      <br /> Game developed by{" "}
      <a href="https://github.com/aleksanderwozniak">Aleksander Woźniak</a>
      <br /> Website created by{" "}
      <a href="http://michalczmiel.me">Michał Czmiel</a>
      <br />
      <Link to="/licenses" style={{ marginRight: "0.3rem" }}>
        used licenses
      </Link>
      <Link to="/privacy-policy">privacy policy</Link>
      <br />
      <a href="https://www.facebook.com/theshapequest/">
        <img src={facebookLogo} alt="ShapeQuest facebook logo" />
      </a>
    </footer>
  );
}

export default Footer;
