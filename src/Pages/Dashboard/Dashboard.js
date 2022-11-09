import React from "react";
import Navbar from "../Navbar/Navbar";
import OverviewCard from "./OverviewCard";
import "../Dashboard/Dashboard.css";
import TopNavBar from "../../components/TopNavBar";

function Dashboard() {
  return (
    <div className="container-fluid mt-4">
      <div className="row mw-70">
        <div className="dashboard-nav mh-100 col-2">
          <Navbar/>
        </div>
        <div style={{border :"2px red solid"}} className="dashboard-main mh-100 col-10">
          <TopNavBar/>
          <div className="Greeting-text row mx-5 my-4">
            <p>Hello, Chris</p>          
          </div>
          <OverviewCard/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
