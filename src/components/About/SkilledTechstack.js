import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiPython, DiGit } from "react-icons/di";
import {
  BiLogoTypescript,
  BiLogoDocker,
  BiLogoKubernetes,
} from "react-icons/bi";
import { SiFastapi, SiElasticsearch } from "react-icons/si";

function SkilledTechstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <b>Python</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <b>FastAPI</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <b>React</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoTypescript />
        <b>TypeScript</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <b>Git</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoDocker />
        <b>Docker</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoKubernetes />
        <b>Kubernetes</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
        <b>Elasticsearch</b>
      </Col>
    </Row>
  );
}

export default SkilledTechstack;
