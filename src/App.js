import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/contents/Home";
import About from "../src/contents/About";
import Education from "../src/contents/Education";
import Skills from "../src/contents/Skills";
import Contact from "../src/contents/Contact";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
