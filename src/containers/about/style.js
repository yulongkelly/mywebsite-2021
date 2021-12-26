import styled from "styled-components";

const typingspeed = 3.5;

export const ContentContainer = styled.div`
  text-align: center;
  font-size: 45px;
  margin-top: 100px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: 0;

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

export const Text = styled.p`
  width: 50%;
  left: 0;
`;

export const Note = styled.div`
  position: absolute;
  font-size: 10px;
  opacity: 0.7;
  top: 100px;
  right: 5px;

  // animation: blink-text 3s ease-in infinite;

  // @keyframes blink-text {
  //   from,
  //   to {
  //     opacity: 0.5;
  //   }
  //   50% {
  //     opacity: 0;
  //   }
  // }
`;

export const PhotosContainer = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
`;

export const Img = styled.img`
  height: 500px;
  width: 500px;
`;

export const Final = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 45px;
    margin: 25% 0;
  }
`;

export const ArrowAnim = styled.div`
  perspective: 500px;
  animation: bounce 2s linear infinite;
//   @keyframes slide {
//     0% { opacity:0; transform: translateY(0); }  
//    20% { opacity:1; transform: translateY(5vh); } 
//    80% { opacity:1; transform: translateY(9vh); }  
//   100% { opacity:0; transform: translateY(10vh); } 
// }
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const Arrow = styled.div`
  width: 5vh;
  height: 5vh;
  border: 2vh solid;
  border-color: white transparent transparent white;
  transform: rotate(-135deg);
`;

export const Map = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  // animation-play-state: ${(props) => `${props.state}`};

  img {
    &.animation {
      animation: bounce-rotate 500ms ease ${(props) => props.i} infinite;
      @keyframes bounce-rotate {
        50% {
          transform: translateY(-10px);
        }
      }
    }
  }

  img:nth-child(1) {
    width: 30px;
    height: 25px;
    position: absolute;
    bottom: 250px;
    right: 170px;
    transform: translateY(0);
    animation-play-state: ${(props) => (props.showSchool ? "paused" : "running")};
  }

  img:nth-child(2) {
    width: 30px;
    height: 25px;
    position: absolute;
    bottom: 300px;
    left: 185px;
    opacity: ${(props) => (props.showSecondMarker ? 1 : 0)};
    animation-play-state: ${(props) => (props.showSchool ? "paused" : "running")};
  }

  img:nth-child(3) {
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 250px;
    left: 150px;
    opacity: ${(props) => (props.showSchool ? 1 : 0)};
    animation-play-state: paused;
  }

  &::after {
    content: "";
    height: 3px;
    position: absolute;
    top: 250px;
    width: 415px;
    left: 200px;
    border-top: 5px dotted #f00;
    transform: scaleX(0) rotate(7deg);
    transform-origin: right;

    animation: travel 500ms ease forwards;
    animation-play-state: ${(props) =>
      props.showSecondMarker ? "running" : "paused"};

    @keyframes travel {
      to {
        transform: scaleX(1) rotate(7deg);
      }
    }
  }
`;

export const MapWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

export const MapText = styled.h2`
  position: absolute;
  top: -70px;
  width: 100%;
  opacity: 0;
  font-size: 30px;
  text-align: center;

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
