import React, { Component } from "react";

import { Container } from "../style";
import { TextContainer, Text, PhotosContainer } from "./style";

class About extends Component {
  constructor() {
    super();
    this.state = {
      animationState: "paused",
      animationClass: "animation",
    };
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if(window.scrollY < this.containerRef.current.offsetTop) {
      this.setState({
        animationState: "paused",
      });
    }
    if(window.scrollY >= this.containerRef.current.offsetTop) {
      this.setState({
        animationState: "running",
      });
    }
    if(window.scrollY > this.containerRef.current.offsetTop + this.containerRef.current.offsetHeight/2) {
      this.setState({
        animationState: "paused",
      });
    }
  }

  render() {
    const objects = [
      ["I born in Hunan, China", 22],
      ["I came to Canada in 2017", 24],
      ["I studys Computer Science @ University of Waterloo", 50],
      ["I like reading", 14],
      ["Listen to music", 15],
      ["Playing Ping Pong", 17],
      ["And of course Coding!", 20],
    ];
    return (
      <div id="about">
        <Container ref={this.containerRef}>
          <TextContainer>
            {objects.map((object, i) => {
              return (
                <Text numChars={object[1]} key={i} index={i} state={this.state.animationState} className={this.props.animationClass}>
                  {object[0]}
                </Text>
              );
            })}
          </TextContainer>
          <PhotosContainer></PhotosContainer>
        </Container>
      </div>
    );
  }
}

export default About;
