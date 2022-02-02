import React from 'react';
import "./signupstyle.scss";
import   {useState} from 'react';
import login  from '../images/login.svg';
import register  from '../images/register.svg';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';



// import {RiLockPasswordFill} from 'react-icons/ri';


const Signup = () => {
  const  [flag,setFlag] = useState(1);
 
return(
    <>
{/* <h1>Signup Page</h1> */}
<div className=" signupcls" data-aos="fade-up" data-aos-delay="400">
  <div className='row'>
    <div className='col-10 mx-auto'>

    
    <div className={ `container ${flag? null : 'sign-up-mode'}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" autoComplete='off'/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="number" placeholder="Email" autoComplete='off'/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" autoComplete='off'/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" autoComplete='off'/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Conform Password" autoComplete='off'/>
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" class="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
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
            <NavLink  excat className="nav-link-signup" to="/signup">
            <button className="btn transparent" id="sign-up-btn" onClick = {()=>setFlag(!flag)}>
              Sign up
            </button></NavLink>
          </div>
          <img src={register} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account?</h3>
            <p>
              Log in first to start with bestbid!!
            </p>
            <NavLink  excat className="nav-link-signin" to="/signin">
            <button className="btn transparent" id="sign-in-btn" onClick = {()=>setFlag(!flag)}>
              Sign in
            </button></NavLink>
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
