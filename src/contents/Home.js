import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/dp.png";
import Social from "../components/Social";
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} className="profilepic" alt=""></img>
        <ReactTypingEffect
          className="typingeffect"
          text={["I am Shikhar Sharma", "A web Dev who cooks up a storm !"]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}
export default Home;
