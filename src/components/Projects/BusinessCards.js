import React from "react";
import Card from "react-bootstrap/Card";

function BusinessCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="colored">{props.date}</Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default BusinessCard;
