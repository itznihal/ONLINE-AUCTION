import React, { useContext } from 'react';
import "./signupstyle.scss";
import { useState } from 'react';
import login from '../images/login.svg';
import register from '../images/register.svg';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink, useHistory } from 'react-router-dom';
import  {UserContext} from '../../App';
import { useAlert } from 'react-alert';


// import {RiLockPasswordFill} from 'react-icons/ri';


const Signup = () => {
  const alert = useAlert();

const {state, dispatch} = useContext(UserContext);

  const [flag, setFlag] = useState(1);
  const history = useHistory();

  //  signUp page 
  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: "", cpassword: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, password, cpassword
      })

    });

    const data = await res.json();
console.log(data);
    if (res.status === 400 || !data) {
      // window.alert("Invalid Regestration");
      alert.error(data.error);
      console.log(data);
    } else {
      // window.alert("Regestration Successful");
      alert.success("Regestration Successful");

      console.log("Regestration Successful");

      setFlag(!flag);
    }



  }
  // SignUp page End


// signin Page

const [email , setEmail] = useState('');
const [password , setPassword] = useState('');


const loginUser =async (e) =>{

//   if(this.state.value.length < 8) {
//     return false;
// }

  e.preventDefault();
  const res = await fetch('/signin' , {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body:JSON.stringify({
      email,
      password
    })
  });

  const data = res.json();

  if(res.status === 400 || !data){
    // window.alert("Invalid Credential");
    alert.error("Invalid Credential");

  }else{
    dispatch({type:"USER" , payload:true});
    // window.alert("login Successful");
    alert.success("login Successful");

    history.push('/');

  }


}

  return (
    <>
      {/* <h1>Signup Page</h1> */}
      <div className=" signupcls" data-aos="fade-up" data-aos-delay="400">
        <div className='row'>
          <div className='col-10 mx-auto'>

{/* Sign in */}
            <div className={`container ${flag ?  'sign-up-mode' : null }`}>
              <div className="forms-container">
                <div className="signin-signup">
                  <form method='POST' className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                      <i className="fas fa-user"></i>
                      <input type="email" placeholder="Email" name='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Password" name='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <input type="submit" value="Login" className="btn solid" name='signin' onClick={loginUser} />
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

                  {/* SignUp */}
                  <form method='POST' className="sign-up-form">
                    <h2 className="title">Sign up</h2>

                    <div className="input-field">
                      <i className="fas fa-user"></i>
                      <input type="text" name="name" placeholder="Username" autoComplete='off'
                        value={user.name}
                        onChange={handleInputs}
                      />
                    </div>

                    <div className="input-field">
                      <i className="fas fa-envelope"></i>
                      <input type="email" name="email" placeholder="Email" autoComplete='off'
                        value={user.email}
                        onChange={handleInputs}
                      />
                    </div>

                    <div className="input-field">
                      <i className="fas fa-envelope"></i>
                      <input type="tel" name="phone" placeholder="Phone Number" autoComplete='off' pattern="[0-9]{10}"
                        value={user.phone}
                        onChange={handleInputs}
                      />

                    </div>

                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="password" name="password" placeholder="Password" autoComplete='off'
                        value={user.password}
                        onChange={handleInputs}
                      />
                    </div>

                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="password" name="cpassword" placeholder="Conform Password" autoComplete='off'
                        value={user.cpassword}
                        onChange={handleInputs}
                      />
                    </div>

                    <input type="submit" className="btn" name='signup' value="Sign up" onClick={PostData} />

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
                    <NavLink excat className="nav-link-signup" to="/signup">
                      <button className="btn transparent" id="sign-up-btn" onClick={() => setFlag(!flag)}>
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
                    <NavLink excat className="nav-link-signin" to="/signin">
                      <button className="btn transparent" id="sign-in-btn" onClick={() => setFlag(!flag)}>
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
