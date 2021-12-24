import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  align-items: center;
  border: 1px solid white;
`;

export const CardContent = styled.div`
  position: relative;
  transition: transform 3s;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
  color: chocolate;
`;

export const Card = styled.div`
  border: 1px solid white;
  width: 20%;
  height: 70%;

  &:hover ${CardContent} {
    transform: rotateY(0.5turn);
  }
`;

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  // transform: rotateY(0.25turn);
  backface-visibility: hidden;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;

  background-image: url(${(props) => props.img});
  background-size: cover;
  background-blend-mode: overlay;
  background-position: ${(props) =>
    props.position ? props.position : "center"};
  background-color: #b7c9e5;

  &::before {
    content: "";
    position: absolute;
    top: 1em;
    bottom: 1em;
    left: 1em;
    right: 1em;
    border: 3px solid currentColor;
    transform: translateZ(50px);
  }

  h1 {
    z-index: 1;
    transform: translateZ(200px);
  }
  p {
    z-index: 1;
    transform: translateZ(100px);
  }
`;

export const CardBack = styled.div`
  height: 100%;
  width: 100%;
  transform: rotateY(0.5turn);
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    transform: translateZ(100px);
  }

  bold {
    color: #FF878B;
  }
  background: #b7c9e5;
`;
