import React, { Component } from "react";
import "./App.css";
import Offices from "./components/OfficesList";
import { Container, Row, Col } from "reactstrap";
import OfficesInfos from "./components/OfficesInfos";
import OfficesHeader from "./components/OfficesHeader";
import StatsWrapper from "./components/StatsWrapper";
import Header from "./components/Header";
import {
  statsInfos,
  statHeaderInfo,
  brandsSvg,
  brandTitle,
  ServicesInf,
  presentation,
  footerDescription,
  headerInfo
} from "./components/PageInformation";
import BrandsList from "./components/BrandsList";
import ServicesList from "./components/ServicesList";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      infos: OfficesInfos,
      officeHead: {
        title: "Improve the lives of millions. Change yours forever",
        text: `More than 500 team mates share our same vision, 
        goals and passion. With offices in Warsaw, Barcelona, 
        Istanbul, Rome, Mexico City and Curitiba, our search for 
        great talent never stops.`
      },
      statsInfos: statsInfos,
      statHeaderInfo: statHeaderInfo,
      bransSvg: brandsSvg,
      brandTitle: brandTitle,
      ServicesInf: ServicesInf,
      presentation: presentation,
      footerDescription: footerDescription,
      isOpen: false,
      headerInfo: headerInfo
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Container fluid>
        <Row
          style={{
            position: "sticky",
            top: "-1px",
            right: "0",
            left: "0",
            zIndex: "10"
          }}
        >
          <Header
            toggle={this.toggle}
            isOpen={this.state.isOpen}
            headerInfo={this.state.headerInfo}
          />
        </Row>

        <Container>
          <Row>
            <Presentation presentation={this.state.presentation} />
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            <ServicesList ServicesInf={this.state.ServicesInf} />
          </Row>
          <Row style={{ margin: "40px 0" }}>
            <Col md="4">
              <h2 style={{ color: "#00b39b" }}>{this.state.brandTitle}</h2>
            </Col>
            <Col
              md={{ size: 7, offset: 1 }}
              style={{
                display: "flex",
                flexWrap: "wrap"
              }}
            >
              <BrandsList bransSvg={this.state.bransSvg} />
            </Col>
          </Row>
        </Container>
        <Row
          style={{
            backgroundColor: "#daf7f6"
          }}
        >
          <StatsWrapper
            statsInfos={this.state.statsInfos}
            statHeaderInfo={this.state.statHeaderInfo}
          />
        </Row>
        <Container>
          <Row style={{ margin: "100px 0" }}>
            <OfficesHeader officeHead={this.state.officeHead} />
          </Row>
          <Row>
            <Offices offices={this.state.infos} />
          </Row>
          <Row>
            <Footer footerDescription={this.state.footerDescription} />
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
