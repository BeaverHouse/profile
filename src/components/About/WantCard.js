import React from "react";
import Card from "react-bootstrap/Card";
import { BiSolidChevronsRight } from "react-icons/bi";

function WantCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul>
            <li className="about-activity">
              <BiSolidChevronsRight /> Using{" "}
              <span className="colored">trending & reliable tech stacks</span>
            </li>
            <br />
            <li className="about-activity">
              <BiSolidChevronsRight />{" "}
              <span className="colored">Collaborating organically</span> with
              team members
            </li>
            <br />
            <li className="about-activity">
              <BiSolidChevronsRight />{" "}
              <span className="colored">Making meaningful applications</span>{" "}
              that someone use practically
            </li>
            <br />
            <li className="about-activity">
              <BiSolidChevronsRight /> Operating and troubleshooting{" "}
              <span className="colored">K8s-based cluster environments</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WantCard;
