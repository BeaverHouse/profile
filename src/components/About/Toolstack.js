import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiHugo, SiNetlify } from "react-icons/si";
import {
  BiLogoApple,
  BiLogoWindows,
  BiLogoVisualStudio,
  BiLogoSlack,
  BiLogoGithub,
  BiLogoGitlab,
  BiLogoAws,
  BiLogoGoogleCloud,
} from "react-icons/bi";
import { RiNotionFill } from "react-icons/ri";
import { FaSourcetree } from "react-icons/fa6";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoApple />
        <b>Mac</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoWindows />
        <b>Windows</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVisualStudio />
        <b>VS Code</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoSlack />
        <b>Slack</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiNotionFill />
        <b>Notion</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSourcetree />
        <b>Sourcetree</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoGithub />
        <b>Github</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoGitlab />
        <b>Gitlab</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHugo />
        <b>Hugo</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <b>Netlify</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoGoogleCloud />
        <b>GCP</b>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoAws />
        <b>AWS</b>
      </Col>
    </Row>
  );
}

export default Toolstack;
