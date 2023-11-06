import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  BiLogoSpringBoot,
  BiLogoKubernetes,
  BiLogoGoLang,
} from "react-icons/bi";
import { DiRust, DiPython, DiGit } from "react-icons/di";
import { FaGolang, FaRust } from "react-icons/fa6";
import { SiPrometheus, SiGrafana } from "react-icons/si";

function LearnTechstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaGolang />
        <b>Go</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRust />
        <b>Rust</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
        <b>Prometheus</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
        <b>Grafana</b>
      </Col>
    </Row>
  );
}

export default LearnTechstack;
