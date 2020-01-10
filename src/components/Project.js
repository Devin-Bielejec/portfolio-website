import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSection = styled.section`
  border: 1px solid black;
  width: 60%;
  margin: 15px auto;
  display: flex:
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledTitle = styled.h2`
  text-align: center;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: black;
`;

const StyledTechStack = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 90%;
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

      <StyledTechStack>
        {techStackArray.map(tech => (
          <li>{tech}</li>
        ))}
      </StyledTechStack>
      <p>{summary}</p>
      <ul>
        {bullets.map(bullet => (
          <li>{bullet}</li>
        ))}
      </ul>
    </StyledSection>
  );
};

export default Project;
