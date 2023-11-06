import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              Majored in Chemical Engineering, but started to start career as
              developer&nbsp;
              <b className="colored">since 2021.</b>
              <br />
              <br />
              I'm always&nbsp;
              <b className="colored">
                eager to learn and use trending languages and applications.
              </b>
              <br />
              I'm currently working on web applications, but also interested in
              mobile apps or DevOps.
              <br />
              <br />I am fluent mainly in
              <i>
                <b className="colored"> Python, especially FastAPI. </b>
              </i>
              <br />
              <br />I can handle&nbsp;
              <i>
                <b className="colored">React.js & Flutter</b>
              </i>
              &nbsp;&nbsp;too, and I'm also learning on DevOps Stacks like&nbsp;
              <br />
              <i>
                <b className="colored">Kubernetes, Helm, Elasticsearch</b>
              </i>
              &nbsp;&nbsp;and so on.
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="colored">connect </span>with me
            </p>
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
