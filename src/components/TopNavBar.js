import React from "react";
import {
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import Avatar from "react-avatar";
import {PlusCircle,BellFill} from "react-bootstrap-icons"

function TopNavBar() {
  return (
    <Navbar className="nav-bar" expand="lg" variant="light">
      <Container fluid>
        <Row>
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search for requests"
              className="me-2"
              aria-label="Search"
            />
          </Form> */}

          <div className="nav-bar-button">
            <Button className="btn btn-md btn-primary col-xs-12">
              <PlusCircle size={20} /> Add Property
            </Button>
          </div>
        </Row>

        <a href="/">
          <Row>
            <Col className="avatar-col">
              <BellFill size={20}/>
            </Col>
            <Col className="d-flex">
              <Avatar
                name="chris mwenda"
                color="#0F3B80"
                size={40}
                textSizeRatio={2.5}
                round="20px"
               />
              <div className="avatar-names">
                <p>Chris</p>
                <p>Landlord</p>
              </div>
            </Col>
          </Row>
        </a>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
