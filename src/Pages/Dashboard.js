import React from "react";
import Navbar from "./Navbar/Navbar";
import OverviewCard from "../components/OverviewCard";
function Dashboard() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div style={{border :"2px red solid"}}className="dashboard-nav mh-100 col-2">
          <Navbar/>
        </div>
        <div style={{border :"2px red solid"}} className="dashboard-main mh-100 col-10">
          <div className="Greeting-text">
            <p>Hello Chris</p>          
          </div>
          <OverviewCard/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
