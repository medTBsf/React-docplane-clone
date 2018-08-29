import React from "react";
import StatsHeader from "./StatsHeader";
import StatsList from "./StatsList";
import { Row, Col } from "reactstrap";

const StatsWrapper = ({ statHeaderInfo, statsInfos }) => {
  return (
    <Col>
      <Row
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <StatsHeader statHeaderInfo={statHeaderInfo} />
        <StatsList statsInfos={statsInfos} />
      </Row>
    </Col>
  );
};

export default StatsWrapper;
