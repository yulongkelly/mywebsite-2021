import React, { Component } from "react";

import { Container } from "../style";
import {
  Wrapper,
  ContentContainer,
  Text,
  PhotosContainer,
  Note,
  Img,
  Final,
  Arrow,
  ArrowAnim,
} from "./style";
import read from "./../../assets/images/reading.png";
import listen from "./../../assets/images/listening.png";
import pingpong from "./../../assets/images/pingpong.png";

class About extends Component {
  constructor() {
    super();
    this.state = {
      animationState: "paused",
      animationClass: "animation",
      shouldShowFinal: false,
    };
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY < this.containerRef.current.offsetTop) {
      this.setState({
        animationState: "paused",
      });
    }
    if (window.scrollY >= this.containerRef.current.offsetTop) {
      this.setState({
        animationState: "running",
      });
    }
    if (
      window.scrollY >
      this.containerRef.current.offsetTop +
        this.containerRef.current.offsetHeight / 2
    ) {
      this.setState({
        animationState: "paused",
      });
    }
  };

  handleAnimationEnd = (i) => {
    // hard coded; 6 frames -- objects.length
    if (i === 6) {
      this.setState({
        shouldShowFinal: true,
      });
    }
  };

  handleAnimationStart = (i) => {
    if (i === 0) {
      this.setState({
        shouldShowFinal: false,
      });
    }
  };

  render() {
    const objects = [
      ["I born in Hunan, China", 22],
      ["I came to Canada in 2017", 24],
      ["I studys Computer Science @ University of Waterloo", 50],
      ["I like reading", 14, read],
      ["Listen to music", 15, listen],
      ["Playing Ping Pong", 17, pingpong],
      ["And of course Coding!", 20],
    ];
    return (
      <Wrapper id="about">
        <Container ref={this.containerRef} className="about">
          <Note>Click About in the navbar to restart the animation</Note>
          {objects.map((object, i) => {
            return (
              <ContentContainer
                numChars={object[1]}
                key={i}
                index={i}
                state={this.state.animationState}
                className={this.props.animationClass}
                onAnimationStart={() => this.handleAnimationStart(i)}
                onAnimationEnd={() => this.handleAnimationEnd(i)}
              >
                <Text>{object[0]}</Text>
                <PhotosContainer>
                  <Img src={object[2]} />
                </PhotosContainer>
              </ContentContainer>
            );
          })}
          {this.state.shouldShowFinal ? (
            <Final>
              <h1>Learn more about my work experience</h1>
              <div>
                <ArrowAnim>
                  <Arrow />
                </ArrowAnim>
                <ArrowAnim>
                  <Arrow />
                </ArrowAnim>
                <ArrowAnim>
                  <Arrow />
                </ArrowAnim>
              </div>
            </Final>
          ) : null}
        </Container>
      </Wrapper>
    );
  }
}

export default About;
