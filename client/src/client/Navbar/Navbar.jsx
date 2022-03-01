import React , {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import "./navbarstyle.scss";
import {RiAuctionFill} from 'react-icons/ri';
import  {UserContext} from '../../App';


const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);


const RenderMenu = () => {
console.log(`state is ${state}`);
if(state){
  return (
    <>

{/* USER LOGGED IN  */}

<li className="nav-item px-3 mx-auto licls">
          <NavLink activeClassName = 'menu_active' excat className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>

       
<li className="dropdown nav-item px-3 mx-auto licls"><NavLink to="#" className="nav-link"><span id='headrdr'>My Lots</span> </NavLink>
            <ul className='ddlist'>
              <li><NavLink to="/addlot" excat className="nav-link">Add Lot</NavLink></li>
              <li><NavLink to="/updatelot" excat className="nav-link">Update Lot</NavLink></li>
              
            </ul>
          </li>



        <li className="nav-item px-3 mx-auto licls">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/lot">Lot</NavLink>
        </li>

        <li className="nav-item px-3 mx-auto licls">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item px-3 mx-auto licls ">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/service">Services</NavLink>
        </li>

        <li className="nav-item px-3 mx-auto licls">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/contact">Contact Us</NavLink>
        </li>

        <li className="dropdown nav-item px-3 mx-auto licls"><NavLink to="#" className="nav-link"><span id='headrdr'>My Profile</span> </NavLink>
            <ul className='ddlist'>
              <li><NavLink to="/profile" excat className="nav-link">User Profile</NavLink></li>
              <li><NavLink to="/logout" excat className="nav-link">Logout</NavLink></li>
              
            </ul>
          </li>

    </>
  )
}else{
  return(
    <>

<li className="nav-item px-3 mx-auto licls">
          <NavLink activeClassName = 'menu_active' excat className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>

       
<li className="dropdown nav-item px-3 mx-auto licls"><NavLink to="#" className="nav-link"><span id='headrdr'>My Lots</span> </NavLink>
            <ul className='ddlist'>
              <li><NavLink to="/addlot" excat className="nav-link">Add Lot</NavLink></li>
              <li><NavLink to="/updatelot" excat className="nav-link">Update Lot</NavLink></li>
              
            </ul>
          </li>



        <li className="nav-item px-3 mx-auto licls">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/lot">Lot</NavLink>
        </li>

        <li className="nav-item px-3 mx-auto licls">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item px-3 mx-auto licls ">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/service">Services</NavLink>
        </li>

        <li className="nav-item px-3 mx-auto licls">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/contact">Contact Us</NavLink>
        </li>


        <li className="nav-item px-5 mx-auto ">    
        <div className='signupbtn'>
                  <NavLink to="/signup" className='btn-get-started' id="bt1">
                    Sign Up
                  </NavLink>
                </div>
        
        </li>


    </>
  )
}


}


  return (
      <>

<div className="container-fluid nav_bg navbarpg">
  <div className='row'>
    <div className='col-10 mx-auto'>

      
  
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-logo" to="/">
    <RiAuctionFill/>
    BestBid</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
      {/* Home */}
      {/* // Home - Done
// Add Lot
// Lot
// About - Done 
// services - Done
// Contact Us - Done */}
{/* SignUp */}
      
        <RenderMenu/>
        
        
      </ul>

      
    </div>
  </div>
</nav>

</div>
  </div>
</div> 
      </>
  );
};

export default Navbar;
