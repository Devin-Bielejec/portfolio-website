import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSection = styled.section`
  border: 1px solid black;
  width: 100%;
  max-width: 800px;
  margin: 15px auto;
  display: flex:
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px 0px;

  &:hover {
    transform: scale(1.01);   
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledTitle = styled.h2`
  text-align: center;
  color: blue;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: black;
`;

const StyledTechStack = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;
  border-top: 1px solid lightgrey;
  padding-left: 0;
`;

const StyledTechStackitem = styled.li`
  text-align: left;
`;

const StyledSummary = styled.p`
  padding: 5px 5px;
`;
const Project = ({
  title,
  summary,
  picture,
  link,
  techStackArray,
  bullets
}) => {
  return (
    <StyledSection>
      <StyledA href={link}>
        <StyledTitle>{title}</StyledTitle>
      </StyledA>
      <StyledImage src={picture} />

      <StyledSummary>{summary}</StyledSummary>
      <ul>
        {bullets.map(bullet => (
          <li>{bullet}</li>
        ))}
      </ul>
      <StyledTechStack>
        {techStackArray.map(tech => (
          <StyledTechStackitem>{tech}</StyledTechStackitem>
        ))}
      </StyledTechStack>
    </StyledSection>
  );
};

export default Project;
