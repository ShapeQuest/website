import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2rem;
  background-image: url(images/bg2b.png);
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="/" href="/">
        <img
          className="img-responsive centered"
          src="images/logo2c.png"
          alt="logo"
        />
      </Link>
      <h3 className="text-center">Fast-paced mobile action game</h3>
    </StyledHeader>
  );
}

export default Header;
