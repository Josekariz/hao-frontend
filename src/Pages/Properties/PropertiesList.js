import React from "react";
import "../Properties/Properties.css";

function PropertiesList({ search, property }) {
  const tableData = property
    .filter((item) => {
      return search === "" ? item : item.property_name.toLowerCase().includes(search.toLowerCase());
    })
    .map((property) => {
      return (
        <div
          key={property.id}
          className="PropertyRow row gx-0 mx-3 my-3 px-4 py-1"
        >
          <div className="property_attr col">{property.property_name}</div>
          <div className="property_attr col">{property.location}</div>
          <div className="property_attr col">{property.property_type}</div>
          <div className="property_attr col">property.nu</div>

          <div className="col">
            <button className="deleteBtn">Delete</button>
          </div>
        </div>
      );
    });
  return (
    <div className="container">
      <div
        style={{ backgroundColor: "#026995", borderRadius: "5px" }}
        className="row gx-0 mx-3 px-4 py-1"
      >
        <div className="table-headers col">Property name</div>
        <div className="table-headers col">Location</div>
        <div className="table-headers col">Property Type</div>
        <div className="table-headers col">Rent</div>
        <div className="table-headers col"></div>
      </div>
      {tableData}
    </div>
  );
}

export default PropertiesList;
