import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  padding: 10px 0;
  background-color: darkgrey;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">About</StyledNavLink>
      <StyledNavLink to="/projects">Projects</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </StyledNav>
  );
};

export default Nav;
