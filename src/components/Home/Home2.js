import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            {/* <Col md={8} className="home-about-description"> */}
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="colored"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Majored in Chemical & Biological Engineering, but started career
              as a developer&nbsp;
              <b className="colored">since 2021.</b>
              <br />
              <br />I always&nbsp;
              <b className="colored">open to trending tech stacks.</b>
              <br />
              Currently, I'm working on web applications, and I'm also in charge
              of DevOps since the late 2022.
              <br />
              <br />I am fluent mainly in
              <i>
                <b className="colored"> Python (FastAPI) </b>
              </i>
              , and I can also handle a little
              <i>
                <b className="colored"> React & Flutter</b>
              </i>
              &nbsp;&nbsp;too.
              <br />
              <br />
              Recently, I'm using standard DevOps stacks like&nbsp;
              <i>
                <b className="colored">Kubernetes, Helm, Elasticsearch, Argo</b>
              </i>
              &nbsp;&nbsp;and so on,
              <br />
              and I have interest on other CNCF stacks too.
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              FIND <b className="colored">ME</b> ON
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HU-Lee"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haulrest/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://peerlist.io/haulrest"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiPeerlist />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:haulrest@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
