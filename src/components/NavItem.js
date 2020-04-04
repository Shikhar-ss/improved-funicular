import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navitem extends Component {
  render() {
    return (
      <li>
        <Link
          id={this.props.item}
          to={this.props.tolink}
          onClick={(el) => {
            this.props.activeItem(el);
          }}
        >
          {this.props.item}
        </Link>
      </li>
    );
  }
}
export default Navitem;
