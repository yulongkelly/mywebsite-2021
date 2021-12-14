import React from "react";
import { Link as LinkR } from "react-router-dom";

import { NavbarContainer, NavManu, NavItem, NavLink, Img } from "./style";

const Navbar = () => {
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
          <NavItem>
            <NavLink to='home' activeClass='active' smooth={true} spy={true}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='about' activeClass='active' smooth={true} spy={true}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='projects' activeClass='active' smooth={true} spy={true}>Projects</NavLink>
          </NavItem>
        </NavManu>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
