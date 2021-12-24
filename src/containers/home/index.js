import React, { Component } from "react";

import { Container } from "../style";
import {
  Video,
  Content,
  IconsContainer,
  Greeting,
  InformationContainer,
  Subtitle,
  Name,
} from "./style";
import video from "../../assets/video.mp4";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kelly",
      posnTop: "0",
    };
    this.changeToYulong = this.changeToYulong.bind(this);
    this.changeToKelly = this.changeToKelly.bind(this);
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      posnTop: window.scrollY * 0.5 + "px"
    })
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
        <Container top={this.state.posnTop}>
          <Video autoPlay loop muted src={video} type="video/mp4" />
          <Content>
            <Greeting className="greeting" numChars={numChars}>
              <span>Good {timeofDay}</span> My name is
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
              <p> React.js | Django | Node.js | MongoDB | MySQL</p>
              <IconsContainer>
                {/* linkedin */}
                <a
                  href="https://www.linkedin.com/in/yulongkelly-wu/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
                {/* github */}
                <a
                  href="https://github.com/yulongkelly"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" />
                </a>
              </IconsContainer>
            </InformationContainer>
          </Content>
        </Container>
      </div>
    );
  }
}

export default Home;
