import React, { Component } from "react";

import {
  Container,
  Video,
  Content,
  IconsContainer,
  IconLinkWrapper,
  Greeting,
  InformationContainer,
  Subtitle,
  Name,
} from "./style";
import video from "../assets/video3.mp4";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kelly",
      time: "",
    };
    this.changeToYulong = this.changeToYulong.bind(this);
    this.changeToKelly = this.changeToKelly.bind(this);
  }

  changeToYulong() {
    this.setState({ name: "Yulong" });
  }

  changeToKelly() {
    // setTimeout(() => {
      this.setState({ name: "Kelly" })
    // }, 1000);
  }

  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeofDay;
    if (hours < 12) {
      timeofDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeofDay = "afternoon";
    } else {
      timeofDay = "night";
    }
    let numChars = 22 + timeofDay.length + this.state.name.length;
    return (
      <div id="home">
        <Container>
          <Video autoPlay loop muted src={video} type="video/mp4" />
          <Content>
            <Greeting className="greeting" numChars={numChars}>
              <span>Good {timeofDay}</span>, I am
              <Name
              >
                <span>Kelly</span>
                <span>Yulong</span>
              </Name>
              Wu
            </Greeting>
            <InformationContainer>
              <Subtitle>FULLSTACK WEB DEVELOPER</Subtitle>
              <hr />
              <p> React | Django | Node.js | MongoDB | MySQL</p>
              <IconsContainer>
                {/* linkedin */}
                <IconLinkWrapper
                  href="https://www.linkedin.com/in/yulongkelly-wu/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin" />
                </IconLinkWrapper>
                {/* github */}
                <IconLinkWrapper
                  href="https://github.com/yulongkelly"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github-square" />
                </IconLinkWrapper>
              </IconsContainer>
            </InformationContainer>
          </Content>
        </Container>
      </div>
    );
  }
}

export default Home;
