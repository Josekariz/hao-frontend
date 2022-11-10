import React from "react";
import "./About.css";
<<<<<<< HEAD
import Navbar from "../Navbar/Navbar";
import myImage from '../../Pages/Images/pexels-vecislavas-popa-1571460.jpg'
import myImage2 from '../../Pages/Images/pexels-binyamin-mellish-186077.jpg'
function About() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="dashboard-nav mh-100 col-2">
          <Navbar />
        </div>
        <div
          style={{
            backgroundColor: "#eaf9ff",
            maxHeight: "100%",
            overflowY: "scroll",
          }}
          className="dashboard-main mh-100 col-10"
        >
          <div>
            <div className="mainContainer">
              <div className="containerA">
                <div className="containerA1">
                  <img src={myImage} />
                </div>
                <div className="containerA2">
                  <h2>
                    Hao is a platform connecting home buyers to individuals
                    selling their homes in various location.
                  </h2>
                </div>
              </div>
              <div className="containerB">
                <div className="containerB1">
                  <h2>
                    Known for transparency and accountability.We focus on
                    delivering what is best.
                  </h2>
                </div>
                <div className="containerB2">
                <p className="p2">we deliver based on what you wish</p>
                  <img src={myImage2} />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
=======
import myImage from "../../Pages/Images/pexels-vecislavas-popa-1571460.jpg";
import myImage2 from "../../Pages/Images/pexels-binyamin-mellish-186077.jpg";
function About() {
  return (
    <div>
      <div className="mainContainer">
        <div className="containerA">
          <div className="containerA1">
            <img src={myImage} />
          </div>
          <div className="containerA2">
            <h2>
              Hao is a platform connecting home buyers to individuals selling
              their homes in various location.
            </h2>
          </div>
        </div>
        <div className="containerB">
          <div className="containerB1">
            <h2>
              Known for transparency and accountability.We focus on delivering
              what is best.
            </h2>
          </div>
          <div className="containerB2">
            <img src={myImage2} />
          </div>
        </div>
>>>>>>> c2ec49f70c7ba7b5b09efe224aa835e919cdaecb
      </div>
    </div>
  );
}
<<<<<<< HEAD

export default About;
=======
export default About;
>>>>>>> c2ec49f70c7ba7b5b09efe224aa835e919cdaecb
