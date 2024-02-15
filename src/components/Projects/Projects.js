import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import loaprofile from "../../Assets/Projects/loaprofile.png";
import aecheck from "../../Assets/Projects/aecheck.png";
import batorment from "../../Assets/Projects/ba-torment.png";
// import oldFlutter from "../../Assets/Projects/flutter_old.jpg";
import hynix from "../../Assets/Projects/hynix.png";
import diveArgo from "../../Assets/Projects/dive-argo.png";
import BusinessCard from "./BusinessCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="colored">Side Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Many projects were motivated by hobbies & my precious relationship.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aecheck}
              isBlog={false}
              title="AE Check"
              description="Collection tracker for Another Eden, a mobile game made by WFS. It's my first side project, and I'm maintaining this site since 2021. Used React(TypeScript) as frontend, and Python as data processing."
              ghLink="https://github.com/BeaverHouse/aecheck-v3"
              demoLink="https://aecheck.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={batorment}
              isBlog={false}
              title="BA Torment (KR)"
              description="Party search helper for Blue Archive, a mobile game made by Nexon. Used React as frontend, and Python as data processing."
              ghLink="https://github.com/BeaverHouse/bluearchive-torment-front"
              demoLink="https://bluearchive-torment.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loaprofile}
              isBlog={false}
              title="LOA Profile (KR)"
              description="Character search & raid income calculator for LOST ARK, an MMORPG game made by Smilegate. Used React(TypeScript) as frontend, and FastAPI as backend. Backend is being powered by GCP."
              ghLink="https://github.com/BeaverHouse/loa-profile-front"
              demoLink="https://beta.loaprofile.com/calc"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oldFlutter}
              isBlog={false}
              title="Flutter app for family"
              description="I made a few simple Flutter mobile apps, especially customed to my parents."
              ghLink="https://github.com/BeaverHouse/multi-timer-flutter"
              demoLink="https://drive.google.com/drive/folders/1GoD5iyuSg8fFEn_YdZgb4u88ZORVNq76?usp=sharing"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diveArgo}
              isBlog={false}
              title="Dive to Argo"
              description="My first documentation project, about simple practice configuring CI/CD pipeline by using Argo."
              ghLink="https://github.com/BeaverHouse/dive-argo"
              demoLink="https://dive-argo.haulrest.me/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="colored">Business Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Business projects give me an experience that cannot get from personal
          study.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BusinessCard
              imgPath={hynix}
              title="SK hynix - AIS"
              date="2021.05 ~ 2021.12"
              description="Developed ML middle-server service using FastAPI and gRPC."
            />
          </Col>

          <Col md={4} className="project-card">
            <BusinessCard
              imgPath={hynix}
              title="SK hynix - VAIS"
              date="2022.01 ~ 2022.12"
              description="Modernized and troubleshooted Vision AI-based web application implemented with React & Spring Boot."
            />
          </Col>

          <Col md={4} className="project-card">
            <BusinessCard
              imgPath={hynix}
              title="SK hynix - DevOps Admin."
              date="2023.01 ~"
              description="Manage and upgrade K8s-based cluster environments. Use Python·Java·React for regular microservice apps, Argo·Jenkins for CI/CD, Elasticsearch·Kibana for troubleshooting and so on."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
