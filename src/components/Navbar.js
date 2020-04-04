import React, { Component } from "react";
import NavItem from "./NavItem";

class Navbar extends Component {
  state = {
    navItemActive: "",
  };

  activeItem = (el) => {
    console.log("ID_: ", el.target.id);
    if (this.state.navItemActive.length > 0) {
      document
        .getElementById(this.state.navItemActive)
        .classList.remove("active");
    }
    this.setState({ navItemActive: el.target.id }, () => {
      document.getElementById(this.state.navItemActive).classList.add("active");
    });
  };

  render() {
    return (
      <nav>
        <ul>
          <NavItem item="Home" tolink="/" activeItem={this.activeItem} />
          <NavItem item="About" tolink="/about" activeItem={this.activeItem} />
          <NavItem
            item="Skills"
            tolink="/skills"
            activeItem={this.activeItem}
          />
          {/* <Experience/> */}
          <NavItem
            item="Education"
            tolink="/education"
            activeItem={this.activeItem}
          />
          
          <NavItem
            item="Contact"
            tolink="/contact"
            activeItem={this.activeItem}
          />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
