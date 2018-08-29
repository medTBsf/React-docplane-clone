import React from "react";
import Stat from "./Stat";
import { Col, Row } from "reactstrap";
import "./stat.css";

const StatsList = ({ statsInfos }) => {
  return (
    <Col md={{ size: 5, offset: 1 }} style={{ marginTop: "20px" }}>
      <Row>
        {statsInfos.map(elt => {
          return (
            <Col key={elt.title} md="6" className="stat">
              <Stat statInfo={elt} />
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};

export default StatsList;
