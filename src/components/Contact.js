import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  max-width: 800px;
  margin: 100px auto;
`;

const StyledA = styled.a`
  padding: 20px;
`;

/* Twitter, Github, Email  */
const Contact = () => {
  return (
    <main>
      <StyledSection>
        <StyledA href="www.twitter.com/dbielejec">Twitter</StyledA>
        <StyledA href="www.github.com/devin-bielejec">Github</StyledA>
        <p>Or you can email me at devin.bielejec@gmail.com</p>
      </StyledSection>
    </main>
  );
};

export default Contact;
