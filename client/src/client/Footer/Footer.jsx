import React from 'react';
import "./footer.scss";
import { NavLink } from 'react-router-dom';
import {AiOutlineRight , AiFillTwitterCircle} from 'react-icons/ai';

import {FiTwitter , FiFacebook , FiInstagram , FiMail} from 'react-icons/fi';
// import {BsFacebook} from 'react-icons/bs';
// import {FaInstagramSquare} from 'react-icons/fa';
// import {CgMail} from 'react-icons/cg';

import 'font-awesome/css/font-awesome.min.css';



const Footer = () => {
  return (
    <>
    <div className="footercls">
    <footer id="footer">

<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>Be the first to know about exciting new Auctions , special events and much more</p>
        <form action="" method="post">
          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row">
      

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>Bestbid</h3>
        <p>
          Dharmsinh Desai University<br/>
          Nadiad, College Rd<br/>
          Gujarat 387001 <br/><br/>
          <strong>Phone:</strong>+91 8980452333<br/>
          <strong>Email:</strong> nihalparmar@gmail.com<br/>
        </p>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
        {/* <li><NavLink to="/addlot" excat className="nav-link">Add Lot</NavLink></li> */}
        <li><AiOutlineRight/> <NavLink to="/" excat className="nav-link">About us</NavLink></li>
        <li><AiOutlineRight/> <NavLink to="/service" excat className="nav-link">Services</NavLink></li>
        <li><AiOutlineRight/> <NavLink to="/service" excat className="nav-link">Terms of Services</NavLink></li>
        <li><AiOutlineRight/> <NavLink to="/contact" excat className="nav-link">Contact Us</NavLink></li>

          
          
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>

        <li><AiOutlineRight/> <NavLink to="/signin" excat className="nav-link">Sign In</NavLink></li>
        <li><AiOutlineRight/> <NavLink to="/signin" excat className="nav-link">Register</NavLink></li>
        <li><AiOutlineRight/> <NavLink to="/lot" excat className="nav-link">Active Auctions</NavLink></li>
        <li><AiOutlineRight/> <NavLink to="/contact" excat className="nav-link">Contact Us</NavLink></li>



          
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Stay Connected</h4>
        <p>Best Bid Blogs</p>
        <div className="social-links mt-3">

        <NavLink to="/contact" excat className="nav-link twitter"><FiTwitter/></NavLink>
        <NavLink to="/contact" excat className="nav-link twitter"><FiFacebook/></NavLink>
        <NavLink to="/contact" excat className="nav-link twitter"><FiInstagram/></NavLink>
        <NavLink to="/contact" excat className="nav-link twitter"><FiMail/></NavLink>


          {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
        </div>
      </div>

    </div>
  </div>
</div>


<div className="container py-4">
  <div className="copyright">
    &copy; Copyright <strong><span>Bestbid</span></strong>. All Rights Reserved
  </div>
  
</div>
</footer>
</div>


    </>
  )
}

export default Footer