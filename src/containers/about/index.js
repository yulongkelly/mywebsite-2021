import React, { Component } from "react";

import { Container } from "../style";
import { TextContainer, Text, PhotosContainer } from "./style";

class About extends Component {
  constructor() {
    super();
    this.state = {
      animationState: "paused",
    };
    this.containerRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this)
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
      ["I am studying Computer Science @ University of Waterloo", 55],
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
                <Text numChars={object[1]} key={i} index={i} state={this.state.animationState}>
                  {object[0]}
                </Text>
              );
            })}
            {/* <Text numChars={22} index={0} state={this.state.animationState}>
              I born in Hunan, China
            </Text>
            <Text numChars={24} index={1} state={this.state.animationState}>
              {" "}
            </Text>
            <Text numChars={55} index={2} state={this.state.animationState}>
              I am studying Computer Science @ University of Waterloo
            </Text>
            <Text numChars={14} index={3} state={this.state.animationState}>
              I like reading{" "}
            </Text>
            <Text numChars={15} index={4} state={this.state.animationState}>
              Listen to music{" "}
            </Text>
            <Text numChars={17} index={5} state={this.state.animationState}>
              Playing Ping Pong
            </Text>
            <Text numChars={20} index={6} state={this.state.animationState}>
              And of course Coding!
            </Text> */}
          </TextContainer>
          <PhotosContainer></PhotosContainer>
        </Container>
      </div>
    );
  }
}

export default About;
