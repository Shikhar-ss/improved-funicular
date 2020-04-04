import React, { Component } from "react";
import Widecard from "../components/WideCards";
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="B.Tech Information Technology"
          where="Noida Institute of Engineering and Technology (A.K.T.U)"
          from="2015"
          to="2019"
        />
        <Widecard
          title="SSLC | HSC"
          where="St. Fidelis senior Secondary School"
          from="2000"
          to="2014"
        />
      </div>
    );
  }
}
export default Education;
