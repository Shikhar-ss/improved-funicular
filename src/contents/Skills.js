import React, { Component } from "react";
class Skills extends Component {
  state = {
    myskills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Redux",
      "Node JS",
      "Firebase",
    ],
    tools: ["Git", "NPM", "VS Code", "Postman", "Studio 3t", "phpMyAdmin"],
  };
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
          {this.state.myskills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
        <h2>Tools Used</h2>
        <ul>
          {this.state.tools.map((tool) => {
            return <li>{tool}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Skills;
