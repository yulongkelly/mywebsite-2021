import React from "react";

import { CardWrapper, Card, CardContent, CardFront, CardBack } from "./style";
import { Container } from "../style";
import opentext from "../../assets/images/opentext.png";
import tophat from "../../assets/images/tophat.png";
import arista from "../../assets/images/arista.png";

const Experience = () => {
  return (
    <div id="experience">
      <Container>
        <CardWrapper>
          <Card>
            <CardContent>
              <CardFront img={opentext} position={"70% 50%"}>
                {/* <img alt="opentext" src="https://www.opentext.com/file_source/OpenText/en_US/PNG/opentext-image-at-ceo-section-rethink-en.png" /> */}
                <h1>OpenText</h1>
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
                <p>May, 2021 - Aug 2021</p>
              </CardFront>
              <CardBack>
                {" "}
                <ul>
                  <li>
                  Implemented self-refund and mass-refund tool using <bold>React.js, Django, and AWS</bold>
                  </li>
                  <li>
                  Improved the performance of an endpoint which is requested hundreds of times per day by <bold>75%</bold>.
                  </li>
                  <li>
                   Created endpoints using Django REST framework and interacted with MySQL using <bold>Django ORM</bold>.
                  </li>
                  <li>
                  Managed application state with Redux (duck pattern) and applied middleware using <bold>redux-saga</bold>.
                  </li>
                </ul>
              </CardBack>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardFront img={arista}>
                <h1>Arista Networks</h1>
                <p>Jan, 2022 - Aril 2022</p>
              </CardFront>
              <CardBack></CardBack>
            </CardContent>
          </Card>
        </CardWrapper>
      </Container>
    </div>
  );
};

export default Experience;
