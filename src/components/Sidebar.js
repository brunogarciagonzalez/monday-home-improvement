import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Sidebar extends Component {
  constructor() {
    super();
    let starterPath = window.location.pathname;

    this.state = {
      activeItem: starterPath
    };
  }

  handleItemClick = (e, { name }) => {
    // switch statement to get the right string in state
    switch (name) {
      case "home":
        this.setState({ activeItem: "/" });
        break;
      case "photo gallery":
        this.setState({ activeItem: "/gallery" });
        break;
      case "about us":
        this.setState({ activeItem: "/about" });
        break;
      // case 'contact us':
      //     this.setState({ activeItem: "/contact" })
      //     break;
      case "references":
        this.setState({ activeItem: "/references" });
        break;
      case "home maintenance":
        this.setState({ activeItem: "/maintenance" });
        break;
      default:
        this.setState({ activeItem: "/" });
    }
    this.props.handleClose();
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary vertical>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "/"}
            onClick={this.handleItemClick}
          />
        </Link>

        <Link to="/gallery">
          <Menu.Item
            name="photo gallery"
            active={activeItem === "/gallery"}
            onClick={this.handleItemClick}
          />
        </Link>

        <Link to="/about">
          <Menu.Item
            name="about us"
            active={activeItem === "/about"}
            onClick={this.handleItemClick}
          />
        </Link>

        <Link to="/references">
          <Menu.Item
            name="references"
            active={activeItem === "/references"}
            onClick={this.handleItemClick}
          />
        </Link>

        <Link to="/maintenance">
          <Menu.Item
            name="home maintenance"
            active={activeItem === "/maintenance"}
            onClick={this.handleItemClick}
          />
        </Link>
      </Menu>
    );
  }
}

export default Sidebar;
//
// <Link to="/contact">
//   <Menu.Item
//     name="contact us"
//     active={activeItem === "/contact"}
//     onClick={this.handleItemClick}
//   />
// </Link>
