import styled from "styled-components";

const typingspeed = 3.5;

export const TextContainer = styled.div`
  text-align: center;
  display: inline-flex;
  width: 500px;
  height: 700px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  font-size: 45px;
`;

export const Text = styled.p`
  opacity: 0;
  position: absolute;

  &.animation {
    animation: ${(props) =>
      `fadeInup ${typingspeed + "s"} ease ${props.index * typingspeed + "s"}`};
    animation-play-state: ${(props) => `${props.state}`};
  }
  
  @keyframes fadeInup {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const PhotosContainer = styled.div`
  display: inline-flex;
  width: 500px;
  height: 700px;
  margin-top: 100px;
`;
