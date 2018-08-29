import React from "react";
import Office from "./Office";
import { Col } from "reactstrap";

const OfficesList = props => {
  return props.offices.map(elt => {
    return (
      <Col sm="4" key={elt.city} style={{ marginBottom: "20px" }}>
        <Office info={elt} />
      </Col>
    );
  });
};

export default OfficesList;
