import React from "react";

function TopNavBar({setSearch}) {
  return (
    <div className="container mt-5">
      <div classname="row">
        <div className="col-8 m-2 mw-70">
          
            <input
              type="search"
              placeholder="Search for property"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          
        </div>
        <div className="col-4">
          <button>Invite User</button>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
