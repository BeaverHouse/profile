import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiRust } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { SiPrometheus, SiGrafana, SiArgo } from "react-icons/si";

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
        <SiArgo />
        <b>Argo</b>
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
