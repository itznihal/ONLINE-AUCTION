import React from 'react';
import "./signupstyle.scss";
import  {useState} from 'react';
import login  from '../images/login.svg';
import register  from '../images/register.svg';
import 'font-awesome/css/font-awesome.min.css';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {FontAwesomeIcon} from "@fortawesome/free-solid-svg-icons";
import {GoSignIn} from 'react-icons/go';
import { NavLink } from 'react-router-dom';
// BsFacebook
// AiFillTwitterCircle
// AiFillInstagram
// AiFillLinkedin
// BsFillEnvelopeFill
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle , AiFillInstagram , AiFillLinkedin  } from 'react-icons/ai';


import {RiLockPasswordFill} from 'react-icons/ri';


const Signup = () => {

  const  [flag,setFlag] = useState(1);
  return (


    <>
{/* <h1>Signup Page</h1> */}
<div className="container-fluid nav_bg signupcls" data-aos="fade-up" data-aos-delay="400">
  <div className='row'>
    <div className='col-10 mx-auto'>


<div className={ `container ${flag? null : 'sign-up-mode'}`} >
      <div className="forms-container" data-aos="fade-up" data-aos-delay="700">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" >
            <h2 className="title">Sign in</h2>
            <div className="input-field">
            <div className='signinicn'><GoSignIn/></div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
            <div className='signinicn'><RiLockPasswordFill/></div>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <NavLink to="#" className="social-icon">
                {/* <i className="fab fa-facebook-f"></i> */}
                 <BsFacebook/>

              </NavLink>
              <NavLink to="#" className="social-icon">
                {/* <i className="fab fa-twitter"></i> */}
                <AiFillTwitterCircle/>
              </NavLink>
              <NavLink to="#" className="social-icon">
                {/* <i className="fab fa-google"></i> */}
                <AiFillInstagram/>
              </NavLink>
              <NavLink to="#" className="social-icon">
                {/* <i className="fab fa-linkedin-in"></i> */}
                <AiFillLinkedin/>
              </NavLink>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              {/* <i className="fas fa-user"></i> */}
              <div className='signinicn'><GoSignIn/></div>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              {/* <i className="fas fa-envelope"></i> */}
              <div className='signinicn'><BsFillEnvelopeFill/></div>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              {/* <i className="fas fa-lock"></i> */}
              <div className='signinicn'><RiLockPasswordFill/></div>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <NavLink to="#" class="social-icon">
              <BsFacebook/>
              </NavLink>
              <NavLink to="#" className="social-icon">
              <AiFillTwitterCircle/>
              </NavLink>
              <NavLink to="#" className="social-icon">
              <AiFillInstagram/>
              </NavLink>
              <NavLink to="#" className="social-icon">
              <AiFillLinkedin/>
              </NavLink>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Haven't an account?</h3>
            <p>
              Get Started with a free account!!
              
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick = {(prev)=>setFlag(!prev)}>
              Sign up
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account?</h3>
            <p>
              Log in first to start with bestbid!!
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick = {(prev)=>setFlag(!prev)}>
              Sign in
            </button>
          </div>
          <img src={login} className="image" alt="" />
        </div>
      </div>
    </div>

  
    </div>
  </div>
</div>




    </>
  );
};

export default Signup;
