import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Properties/Properties.css";
import PropertiesList from "./PropertiesList";
import TopNavBar from "../../components/TopNavBar";

function Properties() {
  return (
    <div className="container-fluid vh-100 mt-4">
      <div className="row">
        <div
          style={{ border: "2px red solid" }}
          className="dashboard-nav mh-100 col-2"
        >
          <Navbar />
        </div>
        <div
          style={{ border: "2px red solid" }}
          className="dashboard-main mh-100 col-10"
        >
          <TopNavBar />
          <div className="Greeting-text row">
            <p>My Properties</p>
          </div>

          <PropertiesList />
        </div>
      </div>
    </div>
  );
}

export default Properties;
