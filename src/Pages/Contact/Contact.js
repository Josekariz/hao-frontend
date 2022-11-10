import React from "react";
import Navbar from "../Navbar/Navbar";

function Contact() {
    return (
        <div className="container-fluid mt-4">
      <div className="row">
        <div className="dashboard-nav mh-100 col-2">
          <Navbar/>
        </div>
        <div style={{backgroundColor:"#eaf9ff",maxHeight:"100%",overflowY:"scroll"}} className="dashboard-main mh-100 col-10">
          <div className="Greeting-text">
            <p>Contact Us </p>          
          </div>

        </div>
      </div>
    </div>
    );
}

export default Contact;