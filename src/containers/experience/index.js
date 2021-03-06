import React from "react";

import {
  CardWrapper,
  Card,
  CardContent,
  CardFront,
  CardBack,
  Note,
  RightArrows,
} from "./style";
import { Container } from "../style";
import opentext from "../../assets/images/opentext.png";
import tophat from "../../assets/images/tophat.png";
import arista from "../../assets/images/arista.png";

const Experience = () => {
  const forward = ">>>";
  const backward = "<<<";
  return (
    <div id="experience">
      <Container>
        {/* <Wrapper> */}
        <CardWrapper>
          <Card>
            <CardContent>
              <CardFront img={opentext} position={"70% 50%"}>
                {/* <img alt="opentext" src="https://www.opentext.com/file_source/OpenText/en_US/PNG/opentext-image-at-ceo-section-rethink-en.png" /> */}
                <h1>OpenText</h1>
                <h4>Software Developer Intern</h4>
                <p>Sept, 2020 - Dec 2020</p>
              </CardFront>

              <CardBack>
                <ul>
                  <li>
                    Designed and implemented a JavaScript test framework from
                    scratch using <bold>Mocha, Chai, and Sinon</bold> for a Web
                    Application Open Platform Interface Protocol service.
                  </li>
                  <li>
                    Implemented error handlers in the{" "}
                    <bold>RESTful routes</bold> for an enterprise-level SaaS
                    application.
                  </li>
                  <li>
                    Created 40+ automatic tests using Mocha, Chai, and Sinon.
                  </li>
                </ul>
              </CardBack>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardFront img={tophat}>
                <h1>Top Hat</h1>
                <h4>Full Stack Developer Intern</h4>
                <p>May, 2021 - Aug 2021</p>
              </CardFront>
              <CardBack>
                {" "}
                <ul>
                  <li>
                    Implemented self-refund and mass-refund tool using{" "}
                    <bold>React.js, Django, and AWS</bold>
                  </li>
                  <li>
                    Improved the performance of an endpoint which is requested
                    hundreds of times per day by <bold>75%</bold>.
                  </li>
                  <li>
                    Created endpoints using Django REST framework and interacted
                    with MySQL using <bold>Django ORM</bold>.
                  </li>
                  <li>
                    Managed application state with Redux (duck pattern) and
                    applied middleware using <bold>redux-saga</bold>.
                  </li>
                </ul>
              </CardBack>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardFront img={arista}>
                <h1>Arista Networks</h1>
                <h4>Diagnostic/Infrastructure Engineering</h4>
                <h4>Intern</h4>
                <p>Jan, 2022 - Aril 2022 (expected)</p>
              </CardFront>
              <CardBack>
                <ul>
                  <li>
                    Designed and implemented a script for creating and managing
                    a new database using <bold>Go</bold>.
                  </li>
                  <li>
                    Created an environment to run tests locally using{" "}
                    <bold>Docker</bold> and <bold>Python</bold>.
                  </li>
                  <li>
                    Implemented git pre-commit script to check Pylint errors in
                    Python 2.5.
                  </li>
                  <li>
                    Redesigned a python script that generates test reports
                    running every 10 minutes.
                  </li>
                </ul>
              </CardBack>
            </CardContent>
          </Card>
        </CardWrapper>
        <Note>
          <p>{backward}</p>
          <h4>Hover the card</h4>
          <RightArrows>{forward}</RightArrows>
        </Note>
        {/* </Wrapper> */}
      </Container>
    </div>
  );
};

export default Experience;
