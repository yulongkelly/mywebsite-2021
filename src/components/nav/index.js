import React, {Component} from "react";
import { Link as LinkR } from "react-router-dom";

import { NavbarContainer, NavManu, NavItem, NavLink, Img } from "./style";

class Navbar extends Component {
  constructor() {
    super()
  }

  render() {
    const sections = ["home", "about", "projects"];
    return (
      <>
        <NavbarContainer>
          <LinkR to="/">
            <Img
              className="logo"
              src="https://yulongkellyweb.s3.amazonaws.com/logo.png"
            />
          </LinkR>
          <NavManu>
            {sections.map((section) => {
              return (
                <NavItem key={section}>
                  <NavLink
                    to={section}
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    onClick={section === "about" ? this.props.onClick : null}
                  >
                    {section[0].toUpperCase() + section.substring(1)}
                  </NavLink>
                </NavItem>
              );
            })}
          </NavManu>
        </NavbarContainer>
      </>
    );
  }
}

export default Navbar;
