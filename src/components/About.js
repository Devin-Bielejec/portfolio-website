import React from "react";
import styled from "styled-components";
import ProfilePicture from "../img/profilePicture.jpg";

const StyledMain = styled.main`
  display: flex;
  flex-flow: column no wrap;
  justify-content: center;
  margin: 100px auto;
  padding: 0 10px;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 40%;
`;
const About = () => {
  return (
    <StyledMain>
      <section>
        <StyledImage src={ProfilePicture} />
        <p>
          I am a High School Math Teacher with a passion for learning tools and
          techniques to brings my ideas to life. I've spent the last year
          studying Web Development and Computer Science at Lambda School, a
          9-month intensive fully remote online bootcamp. I spend most of my
          time learning, making games with React, and figuring out problems.
        </p>
        <p>
          When I'm not on my computer, I'm playing with my 3 dogs, tending to
          many 30ish chickens, or making food for friends. I like to travel for
          food, and I'm a huge local food fan.
        </p>
        <p>
          Currently I'm working on an{" "}
          <a
            href={"https://bielejecsheets.netlify.com"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "text-decoration": "none", color: "blue" }}
          >
            app
          </a>{" "}
          for teachers that will give them the freedom to choose their own
          questions from a question bank and create assessments. In addition,
          I'm working on other side projects that improve and help teachers save
          time, so they can spend the majority of time on the parts of school
          that matter the most.
        </p>
      </section>
    </StyledMain>
  );
};

export default About;
