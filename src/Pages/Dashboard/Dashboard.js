import React from "react";
import Navbar from "../Navbar/Navbar";
import OverviewCard from "./OverviewCard";
import "../Dashboard/Dashboard.css";
import TopNavBar from "../../components/TopNavBar";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row mw-70">
        <div className="DashboardSideMenu dashboard-nav mh-100 col-2">
          <Navbar/>
        </div>
        <div style={{backgroundColor:"#eaf9ff",maxHeight:"100%",overflowY:"scroll"}}className="dashboard-main mh-100 col-10">
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
