import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <>

<div className="container-fluid nav_bg">
  <div className='row'>
    <div className='col-10 mx-auto'>

      
  
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Auction</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {/* Home */}
      {/* // Home - Done
// Add Lot
// Lot
// About - Done 
// services - Done
// Contact Us - Done */}
{/* SignUp */}
        <li className="nav-item px-3">
          <NavLink activeClassName = 'menu_active' excat className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item px-3">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/addlot">Add Lot</NavLink>
        </li>

        <li className="nav-item px-3">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/lot">Lot</NavLink>
        </li>

        <li className="nav-item px-3">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item px-3">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/service">Services</NavLink>
        </li>

        <li className="nav-item px-3">
          <NavLink activeClassName = 'menu_active' excat className="nav-link" to="/contact">Contact Us</NavLink>
        </li>

        <li className="nav-item px-5">
        <NavLink activeClassName = 'menu_active' excat className="btn btn-primary" to="/signup" role="button"> Sign Up</NavLink>
        </li>

        
        
        
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
