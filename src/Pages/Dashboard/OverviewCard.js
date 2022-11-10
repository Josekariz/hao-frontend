import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import {
  HouseDoorFill,
  PersonFill,
  CurrencyExchange,
  GraphDownArrow,
  LockFill,
  Speedometer
} from "react-bootstrap-icons";
import "../Dashboard/Dashboard.css";
import OverviewList from "./OverviewList";

function OverviewCard() {
  return (
    // <div className="Container">
    //   <div className=" innerCard row mx-5 mw-30 ">
    //     <div className="innerCardCol col -mx-2">
    //       <HouseDoorFill size={40} />
    //       <p>Total Properties</p>
    //     </div>
    //     <div className="innerCardCol col mx-2">
    //       <PersonFill size={40} />
    //       <p>Total Tenants</p>
    //     </div>
    //     <div className="innerCardCol col mx-2">
    //      <div className="col">
    //         <div className="row">
    //         <CurrencyExchange size={40} />
    //        </div>
    //        <div className="row">
    //        <p>Monthly Rent Value</p>
    //        </div>
    //        <div className="row">
    //        <p>Ksh.200,000</p>
    //        </div>
    //        </div>
    //     </div>
    //   </div>

    //   <div className=" innerCard row my-4 mx-5 mw-30 ">
    //     <div className="innerCardCol col -mx-2">
    //       <HouseDoorFill size={40} />
    //       <p>Total Properties</p>
    //     </div>
    //     <div className="innerCardCol col mx-2">
    //       <HouseDoorFill size={40} />
    //       <p>Total Properties</p>
    //     </div>
    //     <div className="innerCardCol col mx-2">
    //       <HouseDoorFill size={40} />
    //       <p>Total Properties</p>
    //     </div>
    //   </div>
    //   <div className="OverviewListData row mx-5">
    //     <OverviewList />
    //   </div>
    // </div>
    <>
    <Container>
      <Row className="overview-card col-md-10 mt-3">
        <Col className="innerCard d-flex justify-content-around align-items-center">
          <Row style={{backgroundColor:"#aedff4",padding:"10px",borderRadius:"15px"}}>
          <PersonFill size={40} />
          </Row>
          <Row className="d-flex flex-column">
            <h5 className="overview-header">Active Tenants</h5>
            <h5 className="overview-content">43</h5>
          </Row>
        </Col>

        <Col className="innerCard d-flex justify-content-around align-items-center">
          <Row style={{backgroundColor:"#aedff4",padding:"10px",borderRadius:"15px"}}>
          <HouseDoorFill size={40} />
          </Row>
          <Row className="d-flex flex-column">
            <h5 className="overview-header">Total Properties</h5>
            <h5 className="overview-content">100</h5>
          </Row>
          {/* <span className="vertical-divider" /> */}
        </Col>

        <Col className="innerCard d-flex justify-content-around align-items-center">
          <Row style={{backgroundColor:"#aedff4",padding:"10px",borderRadius:"15px"}}>
          <CurrencyExchange size={40}/>
          </Row>
          <Row className="d-flex flex-column">
            <h5 className="overview-header">Monthly Rent Value</h5>
            <h5 className="overview-content">Ksh. 8,465,000</h5>
          </Row>
        </Col>
      </Row>
      <Row className="overview-card col-md-10 mt-3 mb-5">
        <Col className="innerCard d-flex justify-content-around align-items-center">
          <Row style={{backgroundColor:"#aedff4",padding:"10px",borderRadius:"15px"}}>
          <LockFill size={40} />
          </Row>
          <Row className="d-flex flex-column">
            <h5 className="overview-header">Occupancy</h5>
            <h5 className="overview-content">80%</h5>
          </Row>
        </Col>

        <Col className="innerCard d-flex justify-content-around align-items-center">
          <Row classname="iconCard" style={{backgroundColor:"#aedff4",padding:"10px",borderRadius:"15px"}}>
          <Speedometer size={40} />
          </Row>
          <Row className="d-flex flex-column">
            <h5 className="overview-header">Economic Vacancy</h5>
            <h5 className="overview-content">11.33%</h5>
          </Row>
          {/* <span className="vertical-divider" /> */}
        </Col>

        <Col className="innerCard d-flex justify-content-around align-items-center">
          <Row style={{backgroundColor:"#aedff4",padding:"10px",borderRadius:"15px"}}>
          <GraphDownArrow size={40}/>
          </Row>
          <Row className="d-flex flex-column">
            <h5 className="overview-header">Annual Loss to lease</h5>
            <h5 className="overview-content">Ksh.894,000</h5>
          </Row>
        </Col>
      </Row>
    </Container>

<div className="OverviewListData row mx-5">
<OverviewList /> 
</div>
</>
  );
}

export default OverviewCard;
