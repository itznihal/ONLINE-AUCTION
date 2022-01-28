// import React from 'react';
// import Home from "./Home";
// import About from "./client/AboutPage/About";
// import Service from "./client/Services/Service";
// import Contact from "./client/ContactPage/Contact";
// import Addlot from "./client/AddLot/Addlot"
// import Lot from "./client/LotPage/Lot"
// import Signup from "./client/SignUp/Signup"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Navbar from "./client/Navbar/Navbar";
// import { Switch , Route , Redirect} from "react-router-dom";  

import React from 'react';
import Home from "./client/HomePage/Home";
import About from "./client/AboutPage/About";
import Service from "./client/Services/Service";
import Contact from "./client/ContactPage/Contact";
import Addlot from "./client/AddLot/Addlot";
import UpdateLot from "./client/UpdateLots/UpdateLot";

import Lot from "./client/LotPage/Lot";
import Signup from "./client/SignUp/Signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./client/Navbar/Navbar";
import { Switch , Route , Redirect} from "react-router-dom";  

import '../node_modules/font-awesome/css/font-awesome.min.css'; 



import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


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
   <Route exact path="/updatelot" component={UpdateLot}/>

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
