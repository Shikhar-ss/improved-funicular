import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social">
       
        <a
          href="https://github.com/Shikhar-ss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github fa-5x"></i>
        </a>
        
        
        <a
          href="https://www.linkedin.com/in/shikhar-sharma-35a4a2118/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in fa-5x"></i>
        </a>
        <a
          href="https://dev.to/shikharss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-dev fa-5x"></i>
        </a>
      </div>
    );
  }
}
export default Social;
