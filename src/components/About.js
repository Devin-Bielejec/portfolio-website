import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-flow: column no wrap;
  justify-content: center;
  margin: 100px auto;
  padding: 0 10px;
  width: 60%;
`;
const About = () => {
  return (
    <StyledMain>
      <section>
        <p>
          I am a Full Stack Web Developer with a passion for learning tools and
          techniques to brings his ideas to life. I'm currently enrolled at
          Lambda School and spend a lot of time learning, making small games
          with React, and figuring out problems.
        </p>
        <p>
          When I'm not on my computer, I'm playing with my 3 dogs or tending to
          many 30ish chickens. I like to travel for food and end up taking lots
          of pictures of the good food I eat.
        </p>
        <p>
          I'm a huge local food fan and enjoying baking bread and eating good
          food.
        </p>
      </section>
    </StyledMain>
  );
};

export default About;
