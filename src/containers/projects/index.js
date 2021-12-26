import React, { Component } from "react";

import { Container } from "../style";
import {
  CarouselWrapper,
  Carousel,
  Card,
  ForwardButton,
  BackwardButton,
  Note,
  Describtion,
  ButtonLink,
  DescribtionWrapper,
} from "./style";
import yelpcamp from "../../assets/images/yelpcamp.png";
import autoscheduler from "../../assets/images/autoscheduler.png";
import academic from "../../assets/images/academic.png";

class Projects extends Component {
  constructor() {
    super();
    this.values = [
      [0.5, 250, -110, 400],
      [0.5, 250, -50, 400],
      [1, 300, 0, 250],
      [0.5, 250, 50, 400],
      [0.5, 250, 110, 400],
    ];
    this.state = {
      index1: 1,
      index2: 2,
      index3: 3,
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleOnKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleOnKeyDown);
  }

  handleForward = () => {
    const prevIndex3 = this.state.index3;
    this.setState({
      index1: prevIndex3 - 3,
      index2: prevIndex3 - 2,
      index3: prevIndex3 - 1,
    });
  };

  handleBackward = () => {
    const prevIndex1 = this.state.index1;
    this.setState({
      index1: prevIndex1 + 1,
      index2: prevIndex1 + 2,
      index3: prevIndex1 + 3,
    });
  };

  handleOnKeyDown = (e) => {
    if (e.keyCode === 39 && this.state.index3 !== 2) {
      this.handleForward();
    } else if (e.keyCode === 37 && this.state.index1 !== 2) {
      this.handleBackward();
    }
  };

  render() {
    const proj1 = (
      <Describtion>
        <h4>Academic Anonymous</h4>
        <ul>
          <li>
            Built a live QA session using <span>React.js</span> during Hack the
            Valley, allowing students to continuously ask questions during
            in-class lectures.
          </li>
          <li>
            Implemented real-time chat feature using <span>Socket.io</span>.
          </li>
        </ul>
      </Describtion>
    );
    const proj2 = (
      <Describtion>
        <h4>Yelp Camp</h4>
        <ul>
          <li>
            Built a Yelp-style website for viewing/uploading campsites using{" "}
            <span>Bootstrap, JavaScript, Express</span>.
          </li>
          <li>
            Stored user and campground data in <span>MongoDB Atlas</span>.
          </li>
          <li>
            Developed REST APIs using <span>Node.js</span>.
          </li>
        </ul>
      </Describtion>
    );
    const proj3 = (
      <Describtion>
        <h4>Auto Scheduler</h4>
        <ul>
          <li>
            Built a website that auto generates schedules using{" "}
            <span>React.js, Django</span>, and <sapn>PostgreSQL</sapn>, helping
            students maintain work-life balance.
          </li>
          <li>
            Implemented an algorithm to check if tasks can be finished on time.
          </li>
        </ul>
      </Describtion>
    );
    let properties = [
      [
        this.state.index1,
        academic,
        proj1,
        "https://github.com/yulongkelly/Academic-Anonymous",
      ],
      [
        this.state.index2,
        yelpcamp,
        proj2,
        "https://ylk-yelp-camp.herokuapp.com/",
      ],
      [
        this.state.index3,
        autoscheduler,
        proj3,
        "https://github.com/yulongkelly/automatic_scheduler",
      ],
    ];
    return (
      <div id="projects">
        <Container>
          <CarouselWrapper>
            <Carousel>
              {properties.map((property) => {
                const index = property[0];
                const img = property[1];
                return (
                  <Card
                    img={img}
                    opacity={this.values[index][0]}
                    height={this.values[index][1]}
                    rotateY={this.values[index][2]}
                    translateZ={this.values[index][3]}
                    //   left={570}
                  >
                    <DescribtionWrapper>
                      {property[2]}
                      <ButtonLink
                        href={property[3]}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Learn more
                      </ButtonLink>
                    </DescribtionWrapper>
                  </Card>
                );
              })}

              {/* <Card
                img={yelpcamp}
                opacity={1}
                height={300}
                rotateY={0}
                translateZ={250}
                //   left={570}
              ></Card>
              <Card
                img={autoscheduler}
                opacity={0.5}
                height={250}
                rotateY={50}
                translateZ={400}
                //   left={590}
              ></Card> */}
              {/* if the first card is present (has opacity 1), we should hide the forward button */}
              {this.state.index3 === 2 ? null : (
                <ForwardButton onClick={this.handleForward} />
              )}
              {this.state.index1 === 2 ? null : (
                <BackwardButton onClick={this.handleBackward} />
              )}
            </Carousel>
            <Note>Press left/right key or click the arrow</Note>
          </CarouselWrapper>
        </Container>
      </div>
    );
  }
}

export default Projects;
