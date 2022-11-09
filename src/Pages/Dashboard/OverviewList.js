import React from "react";
import "../Dashboard/Dashboard.css"

function OverviewList() {
  const tableData= <div className="PropertyRow row gx-0 mx-3 my-3 px-4 py-1">
  <div className="property_attr col">Silverton Heights</div>
  <div className="property_attr col">Apartment</div>
  <div className="property_attr col">Ksh. 55,000</div>
  <div className="property_attr col">Chris Mbogo</div>
  {/* <div className="col">
    <button className="deleteBtn">Delete</button>
  </div> */}
</div>

  return (
    <div className="container">
      <div
        style={{ backgroundColor: "#026995", borderRadius: "5px" }}
        className="row gx-0 mx-3 px-4 py-1"
      >
        <div className="table-headers col">Property Name</div>
        <div className="table-headers col">Property Type</div>
        <div className="table-headers col">Rent</div>
        <div className="table-headers col">Tenant</div>
        {/* <div className="table-headers col"></div> */}
      </div>
      {tableData}
    </div>
  );
}

export default OverviewList;
