import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import aboutImg from "../../Assets/about.png";
import SkilledTechstack from "./SkilledTechstack";
import PartTechstack from "./PartTechstack";
import LearnTechstack from "./LearnTechstack";
// import { BiSolidChevronsRight } from "react-icons/bi";
import WantCard from "./WantCard";
import HateCard from "./HateCard";

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
              KNOW <strong className="colored">WHO I'M</strong>
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
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              WHAT I <strong className="colored">WANT</strong>
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
              WHAT I <strong className="danger">DON'T LIKE</strong>
            </h1>
            <HateCard />
          </Col>
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
      </Container>
    </Container>
  );
}

export default About;
