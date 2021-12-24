import React, {Component} from "react";
import { Link as LinkR } from "react-router-dom";

import { NavbarContainer, NavManu, NavItem, NavLink, Img, IconsContainer } from "./style";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      shouldShowIcons: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleIcons);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleIcons);
  }

  toggleIcons = () => {
    if(window.scrollY > window.innerHeight && !this.state.shouldShowIcons) {
      
      this.setState({
        shouldShowIcons: true,
      })
    } else if(window.scrollY < window.innerHeight && this.state.shouldShowIcons) {
      this.setState({
        shouldShowIcons: false,
      })
    }

  }

  render() {
    const sections = ["home", "about", "experience", "projects"];
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
          <IconsContainer shouldShowIcons={this.state.shouldShowIcons}>
                {/* linkedin */}
                <a
                  href="https://www.linkedin.com/in/yulongkelly-wu/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
                {/* github */}
                <a
                  href="https://github.com/yulongkelly"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" />
                </a>
              </IconsContainer>
        </NavbarContainer>
      </>
    );
  }
}

export default Navbar;
