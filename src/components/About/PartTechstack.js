import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiLogoFlutter, BiLogoFirebase } from "react-icons/bi";
import { SiHelm, SiArgo } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";

function PartTechstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscTerminalBash />
        <b>Shell</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm />
        <b>Helm</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArgo />
        <b>Argo</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoFlutter />
        <b>Flutter</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoFirebase />
        <b>Firebase</b>
      </Col>
    </Row>
  );
}

export default PartTechstack;
