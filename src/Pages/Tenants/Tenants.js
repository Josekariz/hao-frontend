import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../Properties/Properties.css";
import TenantsList from "./TenantsList";
import TopNavBar from "../../components/TopNavBar";

function Tenants() {
  const [search, setSearch] = useState("");
  const [tenant, setTenant] = useState([]);
  const baseUrl = "http://localhost:9292/";
  useEffect(() => {
    getTenants()
  }, []);

  function getTenants(){
    fetch(`${baseUrl}tenants`)
    .then((res) => res.json())
    .then((data) => {
      setTenant(data);
    });
  }
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
          <TopNavBar setSearch={setSearch} />
          <div className="Greeting-text row">
            <p>My Tenants</p>
          </div>

          {tenant && <TenantsList search={search} tenant={tenant} getTenants={getTenants}/>}
        </div>
      </div>
    </div>
  );
}

export default Tenants;
