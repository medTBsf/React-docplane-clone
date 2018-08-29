import React from "react";
import { Col } from "reactstrap";

const OfficesHeader = ({ officeHead }) => {
  return (
    <Col style={{ textAlign: "center" }} md={{ size: 6, offset: 3 }}>
      <h1 style={{ fontSize: "2em", color: "#00b39b" }}>{officeHead.title}</h1>
      <p style={{ color: "#747474", marginTop: "20px", fontSize: ".875em" }}>
        {officeHead.text}
      </p>
    </Col>
  );
};

export default OfficesHeader;
