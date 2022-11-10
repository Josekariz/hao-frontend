
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddPropertyForm() {
  const [property_name, setPropertyName] = useState("");
  const [property_type, setPropertyType] = useState("");
  const [property_size, setPropertySize] = useState("");
  const [location, setLocation] = useState("");
  const [tenant_name, setTenant] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  // const onSubmit = (event) => {
  //   event.preventDefault();

  //   // add_property
  // };
  const baseUrl = "http://localhost:9292/";

  // creating a function to handle submissions
  function handleSubmit(e) {
    e.preventDefault();
    const propertyData = {
      property_name: property_name,
      location: location,
      property_type: property_type,
      property_size: property_size,
    };
    const tenantData = {
      name: tenant_name,
      email: email,
      phone_number: phone_number,
    };

    // create a post request to the mock server
    fetch(`${baseUrl}property`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(propertyData),
    }).then((r) => r.json());
    alert("sent")(navigate("/dashboard"));

    fetch(`${baseUrl}tenant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tenantData),
    }).then((r) => r.json());
    alert("sent")(navigate("/dashboard"));
  }
  return (
    <div>
      <p className="header-1">Add A Property</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Name</Form.Label>
          <Form.Control
            property_name="property_name"
            type="text"
            placeholder="Lavington Heights"
            onChange={(e) => setPropertyName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Type</Form.Label>
          <Form.Control
            property_type="property_type"
            type="text"
            placeholder="Apartment"
            onChange={(e) => setPropertyType(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Property Size</Form.Label>
          <Form.Control
            property_size="property_size"
            type="integer"
            placeholder=" ie 3 Bedrooms"
            onChange={(e) => setPropertySize(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            location="location"
            placeholder="Neighborhood e.g Kilimani"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

        {/* for the tenant */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tenant Name</Form.Label>
          <Form.Control
            tenant_name="tenant_name"
            type="text"
            placeholder="John Doe"
            onChange={(e) => setTenant(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tenant Email</Form.Label>
          <Form.Control
            email="email"
            type="email"
            placeholder="johndoe@yahoo.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tenant NUmber</Form.Label>
          <Form.Control
            phone_number="phone_number"
            type="integer"
            placeholder="0712345678"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Active Tenant?" />
        </Form.Group> */}
        <Button variant="primary" type="submit" className="btn-block px-5">
          Add Property
        </Button>
      </Form>
    </div>
  );
}

export default AddPropertyForm;
