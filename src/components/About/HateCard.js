import React from "react";
import Card from "react-bootstrap/Card";
import { BiSolidChevronsRight } from "react-icons/bi";

function HateCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul>
            <li className="about-activity">
              <BiSolidChevronsRight /> Using{" "}
              <span className="danger">OLD, UNSUSTAINABLE technology</span>
              <br />
              &nbsp;(ex. <span className="danger">nexacro, JSP</span> & etc...)
            </li>
            <br />
            <li className="about-activity">
              <BiSolidChevronsRight /> Repeating task{" "}
              <span className="danger">without motivation and progress</span>
            </li>
            <br />
            <li className="about-activity">
              <BiSolidChevronsRight />{" "}
              <span className="danger">Vertical culture</span> that is{" "}
              <span className="danger">hard or impossible to communicate</span>
            </li>
            <br />
            <li className="about-activity">
              <BiSolidChevronsRight />{" "}
              <span className="danger">Excessive, meaningless workload</span>{" "}
              that harms the work-life balance
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default HateCard;
