import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBackground = styled.div`
  background-color: #365f11;
  padding: 10px 0;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: inherit;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const Nav = () => {
  return (
    <NavBackground>
      <StyledNav>
        <StyledNavLink to="/">About</StyledNavLink>
        <StyledNavLink to="/projects">Projects</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </StyledNav>
    </NavBackground>
  );
};

export default Nav;
