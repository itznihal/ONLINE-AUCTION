import React from 'react';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Addlot from "./Addlot"
import Lot from "./Lot"
import Signup from "./Signup"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import { Switch , Route , Redirect} from "react-router-dom";  


// Last Remain at NaVBAR 
// Home - Done
// Add Lot
// Lot
// About - Done 
// services - Done
// Contact Us - Done


const App = () => {
  return (<>



  <Navbar />  
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/addlot" component={Addlot}/>
   <Route exact path="/lot" component={Lot}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/service" component={Service}/>
   <Route exact path="/contact" component={Contact}/>
   <Route exact path="/signup" component={Signup}/>
     <Redirect to="/" />
     {/* Can use Error 404 Page  but redirect is better than that page */}
   </Switch>
  </>);
};

export default App;
