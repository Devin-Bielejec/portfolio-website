import React from "react";
import Project from "./Project";
import bestPlaceImg from "../img/liveinthebestplace.JPG";
import fifthWheel from "../img/5thwheel.jpg";
import meSoFunny from "../img/mesofunny.png";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-flow: column wrap;
`;

const Projects = () => {
  return (
    <StyledMain>
      <Project
        title={"Live in the Best Place"}
        summary={
          "The app helps users find the best place to live based on their factors."
        }
        techStackArray={["React", "Redux", "Styled Systems", "Jest"]}
        bullets={[
          "Architected a fully functional Front-End with three other developers and collaborated cross-functionally with UX designers, Data Scientists, and Back-End developers, over the course of 8 weeks.",
          "Responsible for managing the user interface while communicating with other departments.",
          "Managed the flow of data with Redux and passed to React components."
        ]}
        link={"www.liveinthebestplace.netlify.com"}
        picture={bestPlaceImg}
      />
      <Project
        title={"5th Wheel"}
        summary={
          "Constructed and developed an app for RV owners to find camp sites."
        }
        techStackArray={["React", "Redux", "Semantic UI", "Formik"]}
        bullets={[
          "Collaborated over the course of 1 week with a team of 15 (Android, IOS, FE, and BE).",
          "Jointly responsible for constructing and developing the app structure and styles",
          "Utilized Formik with Semantic UI to create styled fully functional forms"
        ]}
        link={"https://5th-wheel.now.sh"}
        picture={fifthWheel}
      />
      <Project
        title={"Me So Funny"}
        summary={"An app to generate dad jokes"}
        techStackArray={["HTML", "LESS", "Bootstrap"]}
        bullets={[
          "1 week with another person",
          "Jointly responsible for constructing marketing page per UX designer's plans",
          "Utilized LESS to generate CSS styling for all pages"
        ]}
        link={"https://mesofunny.netlify.com"}
        picture={meSoFunny}
      />
    </StyledMain>
  );
};

export default Projects;
