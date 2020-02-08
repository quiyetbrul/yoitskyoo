import React, { Component } from "react";
import { Link} from "react-scroll";
import "./NavBar.css";

export default class NavBar extends Component {

  render() {
    return (
      <nav>
        <ul id="brand">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            kyoo
          </Link>
        </ul>
        <ul id="menu">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              home.
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              about.
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              work.
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="connect"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              connect.
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
