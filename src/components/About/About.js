import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import aboutImg from "../../Assets/about.png";
import checkImg from "../../Assets/check.png";
import XImg from "../../Assets/x.png";
import Toolstack from "./Toolstack";
import SkilledTechstack from "./SkilledTechstack";
import PartTechstack from "./PartTechstack";
import LearnTechstack from "./LearnTechstack";
// import { BiSolidChevronsRight } from "react-icons/bi";
import WantCard from "./WantCard";
import HateCard from "./HateCard";
import { isMobile } from "react-device-detect";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know <strong className="colored">Who I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={aboutImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {isMobile ? null : (
            <Col
              md={5}
              style={{ paddingTop: "40px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={checkImg} alt="about" className="img-fluid" />
            </Col>
          )}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What I <strong className="colored">WANT</strong>
            </h1>
            <WantCard />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What I <strong className="danger">DON'T LIKE</strong>
            </h1>
            <HateCard />
          </Col>
          {isMobile ? null : (
            <Col
              md={5}
              style={{ paddingTop: "40px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={XImg} alt="about" className="img-fluid" />
            </Col>
          )}
        </Row>
        <h1 className="project-heading">
          <strong className="colored">Skilled</strong> Tech Stacks
        </h1>
        <SkilledTechstack />

        <h1 className="project-heading">
          <strong className="colored">Partly Skilled</strong> Tech Stacks
        </h1>
        <PartTechstack />

        <h1 className="project-heading">Learning or Interested in</h1>
        <LearnTechstack />

        <h1 className="project-heading">
          <strong className="colored">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
