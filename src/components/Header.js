import React from "react";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./css/Header.css";
import { Link } from "react-scroll";

class Header extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} />
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  activeClass="active"
                  className={item.cName}
                  to={item.url}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {item.title}
                </Link>
                {/* <a className={item.cName} href={item.url}>
                  {item.title}
                </a> */}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Header;
