import React, { Component } from "react";

import { Container, Video, Content } from "./style";
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
        this.setState({ name: "Kelly" });
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
    return (
      <div id="home">
        <Container>
          <Video autoPlay loop muted src={video} type="video/mp4" />
          <Content>
            <h1 className="greeting">
              <span>Good {timeofDay}</span>, I am
              <span
                onMouseEnter={this.changeToYulong}
                onMouseLeave={this.changeToKelly}
              >
                {" "}
                {this.state.name}{" "}
              </span>
              Wu
            </h1>
            <h5>BE CHILL BE POSITIVE</h5>
            <hr />
            <p>HTML/CSS | React | JavaScript | Java | Unity</p>
                <div className="social-links">
                  {/* linkedin */}
                  <a
                    href="https://www.linkedin.com/in/yulongkelly-wu/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                  {/* github */}
                  <a
                    href="https://github.com/yulongkelly"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                </div>
          </Content>
        </Container>
      </div>
    );
  }
}

export default Home;
