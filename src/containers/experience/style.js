import styled from "styled-components";

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `

export const RightArrows = styled.p`
margin-left: 20px;
  animation: simple 2s linear infinite;
  @keyframes simple {
    50% {
      transform: translateX(10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(10px);
      opacity: 0;
    }
  }
`;

export const Note = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;

  & p:nth-child(1) {
    margin-right: 20px;
    animation: simple1 2s linear infinite;
  }

  @keyframes simple1 {
    50% {
      transform: translateX(-10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(-10px);
      opacity: 0;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  align-items: center;
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
  h4 {
    z-index: 1;
    transform: translateZ(150px);
    margin: 0;
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
    color: #ff878b;
  }
  background: #b7c9e5;
`;
