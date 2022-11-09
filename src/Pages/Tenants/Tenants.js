import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Properties/Properties.css";
import TenantsList from "./TenantsList";
import TopNavBar from "../../components/TopNavBar";

function Tenants() {
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
            <p>My Tenants</p>
          </div>

          <TenantsList />
        </div>
      </div>
    </div>
  );
}

export default Tenants;
