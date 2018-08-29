import React from "react";
import { Col } from "reactstrap";

const StatsHeader = ({ statHeaderInfo }) => {
  return (
    <Col md="4" style={{ margin: "80px 0 0" }}>
      <h1
        style={{
          fontSize: "2em",
          color: "#00b39b",
          marginBottom: "1.1em",
          fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif"
        }}
      >
        {statHeaderInfo.title}
      </h1>
      <p
        style={{
          color: "#747474",
          fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif"
        }}
      >
        {statHeaderInfo.text}
      </p>
      <div
        style={{
          position: "absolute",
          background: "url(https://www.docplanner.com/img/logo.png)",
          backgroundSize: "cover",
          width: "300px",
          height: "250px",
          top: "60%",
          left: "10%",
          pointerEvents: "none"
        }}
      />
    </Col>
  );
};

export default StatsHeader;
