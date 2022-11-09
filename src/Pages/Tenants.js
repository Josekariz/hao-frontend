import React from "react";
import Navbar from "./Navbar/Navbar";

function Tenants() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div style={{border :"2px red solid"}}className="dashboard-nav mh-100 col-2">
          <Navbar/>
        </div>
        <div style={{border :"2px red solid"}} className="dashboard-main mh-100 col-10">
          <div className="Greeting-text">
            <p>My Tenants</p>          
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tenants;