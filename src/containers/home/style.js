import styled, { keyframes } from "styled-components";

const typingspeed = 3.5;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  color: transparent;
  z-index: 0;
`;

export const Content = styled.div`
  color: white;
  position: absolute;
  text-align: center;
`;

export const Greeting = styled.h1`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  border-right: 0.15em solid transparent;
  animation: ${(props) =>
    `typewriter ${typingspeed + "s"} steps(${
      props.numChars
    }, end), blink-caret 0.75s step-end 8`};

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
`;

export const IconLinkWrapper = styled.a`
  font-size: 50px;
`;

export const InformationContainer = styled.div`
  opacity: 0;
  animation: fadeInup 3s ease ${typingspeed + 0.5 + "s"} forwards;
  transform: translateY(3rem);

  @keyframes fadeInup {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Subtitle = styled.h5`
  margin: 15px;
`;

export const Name = styled.div`
  transition: all 500ms ease-in-out;
  display: inline-flex;
  overflow: hidden;
  align-item: center;
  justify-content: center;
  transition: opacity 2s ease-in-out;
  text-shadow: 0 0 30px #34b3c1, 0 0 10px #4dbbc7;

  width: 125px;
  //   margin-bottom: 30px;

  span:first-child {
    // position: absolute;
    height: auto;
    opacity: 1;
    width: auto;
    padding: 0 5px;
    transform: translateY(0);
    transition: opacity 2s ease-in-out;
  }
  span:nth-child(2) {
    //   position: absolute;
    opacity: 0;
    width: 0;
    padding: 0;
    height: 0;
    transform: translateY(3rem);
    transition: opacity 2s ease-in-out;
  }
  &:hover {
    span:nth-child(1) {
      width: 0;
      opacity: 0;
      height: 0;
      padding: 0;
      transform: translateY(3rem);
      transition: opacity 2s ease-in-out;
    }
    span:nth-child(2) {
      height: auto;
      opacity: 1;
      width: auto;
      transform: translateY(0);
      transition: opacity 2s ease-in-out;
    }
  }
`;
