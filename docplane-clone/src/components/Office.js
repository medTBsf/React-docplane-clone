import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import "./stat.css";

const Office = ({ info }) => {
  return (
    <div className="office">
      <a href={info.link} className="link">
        <Card style={{ width: "300px", height: "340px" }}>
          <CardImg top width="100%" src={info.image} alt="Card image cap" />
          <CardBody
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <CardTitle>{info.city}</CardTitle>
            <Button color="primary">{info.btn.toUpperCase()}</Button>
          </CardBody>
        </Card>
      </a>
    </div>
  );
};

export default Office;
