import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router-dom";
/* 
Nav:

About
-summary, some other tid bits
Project
-liveinthebestplace
-disneyparent
-mesofunny
Contact
-github
-twitter
-linkedin

Centered page


*/
function App() {
  return (
    <Router>
      <Nav />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
