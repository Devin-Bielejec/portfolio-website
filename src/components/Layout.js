import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const Main = styled.main`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;

  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
