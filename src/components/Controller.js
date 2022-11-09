import Dashboard from "../Pages/Dashboard";
import Landlord from "../Pages/Properties";
import Login from "../Pages/Login/Login";
import Tenant from "../Pages/Tenants";

function Controler() {
  return ( <>
  <Landlord/>
  <Dashboard/>
  <Login/>
  <Tenant/>
  
  </> );
}

export default Controler;