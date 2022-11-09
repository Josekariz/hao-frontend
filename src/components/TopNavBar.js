import React from "react";
import { Form, FormControl } from "react-bootstrap";

function TopNavBar() {
  return (
    <div className="container mt-5">
      <div classname="row">
        <div className="col-8 m-2 mw-70">
          <form>
            <input type="search" placeholder="Search for property"/>
            </form>         
        </div>
        <div className="col-4">
          <button>
            Invite User
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
