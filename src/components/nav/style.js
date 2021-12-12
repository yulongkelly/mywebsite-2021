import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const NavbarContainer = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  position: sticky;
  align-items: center;
  top: 0;
`;

export const Img = styled.img`
  height: 30px;
  width: 70px;
  display: flex;
  justify-self: flex-start;
  margin-left: 24px;
  flex-grow: 1;
`;

export const NavManu = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-grow: 2;
  padding: 0 20% 0 0;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
  margin-right: 50px;
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  cursor: pointer;

  &.hover {
    border-bottom: 3px solid #01bf71;
  }
`;
