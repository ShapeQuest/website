import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2rem;
  background-image: url(images/bg2b.png);
`;

function Header() {
  return (
    <StyledHeader>
      <img
        className="img-responsive centered"
        src="images/logo2c.png"
        alt="logo"
      />
      <h3 className="text-center">Fast-paced mobile action game</h3>
    </StyledHeader>
  );
}

export default Header;
