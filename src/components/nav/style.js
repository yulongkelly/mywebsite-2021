import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavbarContainer = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  position: sticky;
  align-items: center;
  top: 0;
  z-index: 255;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  font-size: 30px;

  animation: ${props => props.shouldShowIcons ? "show 1s ease forwards" : "hide 1s ease forwards"};
  transform: translateY(3rem);

  @keyframes show {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes hide {
    to {
      opacity: 0;
      transform: translateY(0);
    }
  }
`;

export const Img = styled.img`
  height: 30px;
  width: 70px;
  display: flex;
  justify-self: flex-start;
  margin-left: 50px;
`;

export const NavManu = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  padding: 0 10% 0 0;
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
  height: 100%;
  width: 60px;
  align-items: center;
  justify-content: center;
  // padding: 10px 0 0 0;
  font-size: 20px;
  overflow-x: visible;

  &:hover {
    border-bottom: 5px solid #01bf71;
  }

  &.active {
    border-bottom: 5px solid #01bf71;
  }
`;
