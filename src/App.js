import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
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
      <Footer />
    </Router>
  );
}

export default App;
