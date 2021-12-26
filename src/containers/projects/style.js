import styled from "styled-components";

export const CarouselWrapper = styled.div`
  height: 100%;
  width: 100%;
  perspective: 1000px;
`;

export const Carousel = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  transform: translateZ(-250px);
  transform-style: preserve-3d;
  transition: transform 1s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescribtionWrapper = styled.div`
  transform: translateY(80%);
  transition: transform 500ms ease;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg, black, transparent);
`;

export const Card = styled.div`
  height: ${(props) => props.height}px;
  width: 400px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-blend-mode: overlay;
  background-position: center center;
  display: block;
  position: absolute;
  opacity: ${(props) => props.opacity};
  border-radius: 10px;
  overflow: hidden;

  transform: rotateY(${(props) => props.rotateY}deg)
    translateZ(${(props) => props.translateZ}px);

    &: hover {
        background-color: rgb(0, 0, 0, 0.6);
    }
    &:hover h4::after {
        transform scaleX(1);
    }

    &:hover ${DescribtionWrapper} {
        transform: translateY(-0);
    }
`;

export const ForwardButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 15%;
  bottom: 50%;
  width: 40px;
  height: 40px;
  border: 5px solid;
  border-color: white transparent transparent white;
  transform: rotate(135deg);
`;

export const BackwardButton = styled.div`
  cursor: pointer;
  position: absolute;
  left: 15%;
  bottom: 50%;
  width: 40px;
  height: 40px;
  border: 5px solid;
  border-color: white transparent transparent white;
  transform: rotate(-45deg);
`;

export const Note = styled.div`
  position: absolute;
  bottom: 5%;
  left: 40%;
`;

export const Describtion = styled.div`
  margin-bottom: 35px;

  span {
      color: #F9F871;
  }

  h4 {
    text-align: center;
    position: relative;
    margin: 0;
  }

  h4::after {
    content: "";
    height: 3px;
    background: #13ef6b;
    width: 90%;
    left: 0;
    position: absolute;
    bottom: -10px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
  }

  ul {
    font-size: 13px;
    
  }
`;

export const ButtonLink = styled.a`
  position: absolute;
  bottom: 0;
  left: 25px;
  text-decoration: none;
  color: black;
  font-size: 13px;
  background-color: #13ef6b;
  padding: 5px;
  border-radius: 5px;
`;
