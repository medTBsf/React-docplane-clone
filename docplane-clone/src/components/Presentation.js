import React from "react";
import { Row, Col } from "reactstrap";

const Presentation = ({ presentation }) => {
  return (
    <Col style={{ textAlign: "center", margin: "50px 0" }}>
      <img src={presentation.logo} alt="" />
      <h1
        style={{
          color: "#00b39b",
          fontSize: "2rem",
          fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
          margin: "1em 0"
        }}
      >
        {presentation.pageMainTitle}
      </h1>
      <Row>
        {presentation.description.map(elt => {
          return (
            <Col
              md="6"
              key={Math.random()}
              style={{
                color: "#747474",
                fontWeight: "400",
                lineHeight: "1.75",
                margin: "0.8em 0",
                textAlign: "left"
              }}
            >
              {elt}
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

export default Presentation;
