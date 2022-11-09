import React from "react";
import "../Tenants/Tenants.css";

function TenantsList() {
  const tableData= <div className="PropertyRow row gx-0 mx-3 my-3 px-4 py-1">
  <div className="property_attr col">Chris Mbogo</div>
  <div className="property_attr col">chris123@gmail.com</div>
  <div className="property_attr col">0712345678</div>
  <div className="property_attr col">Ksh. 55,000</div>
  <div className="col">
    <button className="deleteBtn">Delete</button>
  </div>
</div>

  return (
    <div className="container">
      <div
        style={{ backgroundColor: "#026995", borderRadius: "5px" }}
        className="row gx-0 mx-3 px-4 py-1"
      >
        <div className="table-headers col">Tenant Name</div>
        <div className="table-headers col">Tenant Email</div>
        <div className="table-headers col">Number</div>
        <div className="table-headers col">Rent</div>
        <div className="table-headers col"></div>
      </div>
      {tableData}
    </div>
  );
}

export default TenantsList;
