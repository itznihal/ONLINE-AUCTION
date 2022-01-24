import React from 'react';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { Switch , Route , Redirect} from "react-router-dom";  


// Last Remain at NaVBAR 

const App = () => {
  return (<>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/service" component={Service}/>
   <Route exact path="/contact" component={Contact}/>
     <Redirect to="/" />
     {/* Can use Error 404 Page  but redirect is better than that page */}
   </Switch>
  </>);
};

export default App;
