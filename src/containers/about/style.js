import styled from "styled-components";

const typingspeed = 3.5;

export const Wrapper = styled.div``;

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
