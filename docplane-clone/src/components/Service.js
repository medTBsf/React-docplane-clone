import React from "react";
import ListeDeroulante from "./ListeDeroulante";
import { Col } from "reactstrap";

const Service = ({ serInf }) => {
  return (
    <Col
      md="5"
      style={{
        backgroundColor: serInf.bgColor,
        width: "450px",
        height: "400px",
        position: "relative",
        overflow: "hidden",
        padding: "20px 40px",
        borderRadius: "15px"
      }}
    >
      <h5 style={{ color: "hsla(0,0%,100%,.7)", fontSize: ".875em" }}>
        For {serInf.cible}
      </h5>
      <h1
        style={{
          color: "#fff",
          fontSize: "1.625em",
          marginTop: ".3em",
          fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif"
        }}
      >
        {serInf.desc}
      </h1>
      {serInf.hasListDerourante ? <ListeDeroulante /> : <span />}
      <div
        style={{
          position: "absolute",
          background: serInf.imageBg,
          backgroundSize: "cover",
          width: "380px",
          height: "240px",
          top: "40%",
          left: "45%",
          pointerEvents: "none"
        }}
      />
    </Col>
  );
};

export default Service;
