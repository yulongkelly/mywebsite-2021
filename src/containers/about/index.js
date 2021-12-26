import React, { Component } from "react";

import { Container } from "../style";
import {
  ContentContainer,
  Text,
  PhotosContainer,
  Note,
  Img,
  Final,
  Arrow,
  ArrowAnim,
  Map,
  MapWrapper,
  MapText,
} from "./style";
import read from "./../../assets/images/reading.png";
import listen from "./../../assets/images/listening.png";
import pingpong from "./../../assets/images/pingpong.png";
import map from "./../../assets/images/map.png";
import uwaterloo from "./../../assets/images/uwaterloo.png";
import coding from "./../../assets/images/coding.png";



class About extends Component {
  constructor() {
    super();
    this.state = {
      animationState: "paused",
      animationClass: "animation",
      shouldShowFinal: false,
      shouldShowMap: true,
      shouldShowSecondMarker: false,
      shouldShowSchool: false,
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
        shouldShowMap: true,
        shouldShowSecondMarker: false,
        shouldShowSchool: false,
      });
    } else if(i === 1) {
      this.setState({
        shouldShowSecondMarker: true,
      });
    } else if(i === 2) {
      this.setState({
        shouldShowSchool: true,
      })
    } else if (i === 3) {
      this.setState({
        shouldShowMap:false,
      })
    }
  };

  render() {
    const objects1 = [
      ["I born in Hunan, China", 22],
      ["I came to Canada in 2017", 24],
      ["I studys Computer Science @ University of Waterloo", 50],
    ];
    const objects = [
      ["I like reading", 14, read],
      ["Listen to music", 15, listen],
      ["Playing Ping Pong", 17, pingpong],
      ["And of course Coding!", 20, coding],
    ];
    return (
      <div id="about">
        <Container ref={this.containerRef} className="about">
          <Note>Click About in the navbar to restart the animation</Note>
          <MapWrapper show={this.state.shouldShowMap}>
            {objects1.map((object, i) => {
              return (
                <MapText
                  index={i}
                  className={this.props.animationClass}
                  onAnimationStart={() => this.handleAnimationStart(i)}
                >
                  {object[0]}
                </MapText>
              );
            })}
            <Map img={map}  showSecondMarker={this.state.shouldShowSecondMarker} showSchool={this.state.shouldShowSchool}>
              <img className={this.props.animationClass} src="https://ukauto.fr/wp-content/uploads/2017/11/map-marker-icon.png" />
              <img className={this.props.animationClass} src="https://ukauto.fr/wp-content/uploads/2017/11/map-marker-icon.png" />
              <img className={this.props.animationClass} src={uwaterloo}/>
            </Map>
          </MapWrapper>
          {objects.map((object, i) => {
            i = i + 3;
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
      </div>
    );
  }
}

export default About;
