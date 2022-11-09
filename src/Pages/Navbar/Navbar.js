import React, from "react";
import "../Navbar/Navbar.css"
import {NavLink} from 'react-router-dom'


function Navbar() {
  
  return (
    <div className="container mt-5">
      <div className="navbar_elements row mt-3 px-3 ">
        <NavLink activeClassName="active" to='/dashboard'>
          <div className="menu-cols">
            {/* <Icons.HomeIcon fillColor="black" /> */}
            <p>Dashboard</p>
          </div>
        </NavLink>
      </div>

      <div className="navbar_elements row mt-3 px-3 ">
      <NavLink activeClassName="active" to='/properties'>
          <div className="menu-cols">
            {/* <Icons.HomeIcon fillColor="black" /> */}
            <p>Properties</p>
          </div>
        </NavLink>
      </div>

      <div className="navbar_elements row mt-3 px-3 ">
      <NavLink activeClassName="active" to='/tenants'>
          <div className="menu-cols">
            {/* <Icons.HomeIcon fillColor="black" /> */}
            <p>Tenants</p>
          </div>
        </NavLink>
      </div>

      <div className="navbar_elements row mt-3 px-3 ">
      <NavLink activeClassName="active" to='/about_us'>
          <div className="menu-cols">
            {/* <Icons.HomeIcon fillColor="black" /> */}
            <p>About Us</p>
          </div>
        </NavLink>
      </div>

      <div className="navbar_elements row mt-3 mb-3 px-3 ">
      <NavLink activeClassName="active" to='/contact_us'>
          <div className="menu-cols">
            {/* <Icons.HomeIcon fillColor="black" /> */}
            <p>Contact Us</p>
          </div>
        </NavLink>
      </div>

    </div>
  );
}

export default Navbar;
