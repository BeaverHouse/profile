import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Thanks to&nbsp;
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              target="_blank"
              rel="noreferrer"
              className="colored"
            >
              Soumyajit Behera
            </a>
            &nbsp;for great template
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{year}, HU-Lee.</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
