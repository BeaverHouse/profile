import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiPython, DiGit } from "react-icons/di";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoDocker,
} from "react-icons/bi";
import { SiRedis, SiFastapi, SiElasticsearch, SiOracle } from "react-icons/si";

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
        <BiLogoJavascript />
        <b>Javascript</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoTypescript />
        <b>Typescript</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <b>React.js</b>
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
        <SiElasticsearch />
        <b>Elasticsearch</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <b>Redis</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <b>OracleDB</b>
      </Col>
    </Row>
  );
}

export default SkilledTechstack;
