import React from "react";
import Card from "react-bootstrap/Card";
import { BiSolidChevronsRight } from "react-icons/bi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="colored">HU-Lee </span>
            from <span className="colored"> South Korea.</span>
            <br /> I graduated Seoul National University, majored in Chemical
            and Biological Engineering.
            <br />
            <br />
            I quit my major and started programming at 2020, and started working
            as a developer on March 2021.
            <br />
            Currently, I'm employed as a software developer at Shiftone Co.
            <br />
            <br />
            Apart from coding, some other activities that I'm interested:
          </p>
          <ul>
            <li className="about-activity">
              <BiSolidChevronsRight /> Playing Games
            </li>
            <li className="about-activity">
              <BiSolidChevronsRight /> Watching Sports Channel
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
