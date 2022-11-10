import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Properties from "./Pages/Properties/Properties";
import Tenants from "./Pages/Tenants/Tenants";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AddPropertyForm from "./components/AddPropertyForm ";
// import EditPropertyForm from "./components/AddPropertyForm ";
const BaseRouter = () => (
  <div>
<Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/properties" element={<Properties/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/contact_us" element={<Contact/>} />
      <Route path="/about_us" element={<About/>} />
      <Route path="/tenants" element={<Tenants />} />
      <Route path="/add_property" element={<AddPropertyForm/>} />
      {/* <Route path="/add_property" element={<EditPropertyForm/>} /> */}

      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  </div>
);
    export default BaseRouter;