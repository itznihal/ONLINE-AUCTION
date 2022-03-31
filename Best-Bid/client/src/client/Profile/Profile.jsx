import React, { useEffect, useState } from 'react';
import "./profilestyle.scss"
import { NavLink, useHistory } from 'react-router-dom';
import Img from "../images/values-1.png";
import ProfileImg from "../images/profile-icon-png-899.png";
import { AiOutlineUpload , AiFillDelete } from 'react-icons/ai';
import {  BsCloudUploadFill} from 'react-icons/bs';
import MetaData from '../MetaData/MetaData';






const Profile = () => {

  // HERE USE HISTORY -> AT MIDDLEWARE PAGE -> IF NOT LOGIN -> REDIRECT TO LOGIN PAGE
  const history = useHistory();

  /*USESTATE FOR -> RECIVE AN USER OBJECT AS "DATA" -> ASSIGN DINAMICALLY TO THAT -> AFTER THAT TO CHANGE VALUE USE STATE USE*/
  const [userData , setUserData] = useState({});

  const [name , setName] = useState({});
  const [email , setEmail] = useState({});
  const [phone , setPhone] = useState({});

  const [oldPassword , setOldPassword] = useState({});
  const [newPassword , setNewPassword] = useState({});
  const [confirmPassword , setconfirmPassword] = useState({});



  const callProfilePage = async () => {
    
try {
  const res = await fetch('/about' ,{
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type":"application/json"
    },
    credentials:"include"
  } );
  const data =  await res.json();
  console.log(data);
  setUserData(data);
  setName(data.name);
  setEmail(data.email);
  setPhone(data.phone);
  // console.log(`data send to backend`);

  if(!res.status === 200){
    const error = new Error(res.error);
    throw error;
    
  }


} catch (err) {
  console.log(err);
  history.push('/signup');
}

  }
  /*  USEEFFECT HOOK -> RUN ONLY ONE TIME WHEN FUNCTION IS CALLED -> ARRAY DENOTES -> NO OF TYMS USEEFFECT CALLLS -> callProfilePage is async function -> so we can not use it inside useEffect */
  
  useEffect(() => {
  
    callProfilePage();
  }, []);



// // Update User Profile
//   const updateUser =  async() => {

// // console.log(name , email , phone);

//  }




 const updateUser = async () => {

  // console.log(`email is ${email}`);
  // console.log(`phone is ${phone}`);

  // console.log(`name is ${name}`);


  const res = await fetch("/me/update", {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name, email, phone
    })

  });

// console.log(data);
  if (res.status === 400 ) {
    window.alert("Invalid credential");
    console.log("Invalid credential");
    
  } else {
    window.alert("Profile Updated");
    console.log("Profile Updated");
    callProfilePage();

  }



};



// passwordChangeFun
// const passwordChangeFun = () => {
//   console.log(oldPassword , newPassword  , confirmPassword);
// }


// Update Password
const passwordChangeFun = async () => {

  // console.log(`email is ${email}`);
  // console.log(`phone is ${phone}`);

  // console.log(`name is ${name}`);


  const res = await fetch("/password/update", {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      oldPassword , newPassword  , confirmPassword
    })

  });

// console.log(data);
  if (res.status === 400 ) {
    window.alert("Invalid credential");
    console.log("Invalid credential");
    
  } else {
    window.alert("Password Updated");
    console.log("Password Updated");

  }



};





  return (<>
<MetaData title="BEST BID"></MetaData>

{/* <h1>Hello World</h1> */}




          <div className=" profilecls" data-aos="fade-up" data-aos-delay="400">
        <div className='row'>
          <div className='col-10 mx-auto'>



          <section className="section profile">
      <div className="row cardfix card">
        <div className="col-xl-4  ">

          <div className="cardcontainer ">
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center profileimg">

              <img src={ProfileImg} alt="Profile" className="rounded-circle"/>
              <h2>{userData.name}</h2>
              <h3>User</h3>
             
            </div>
          </div>

        </div>

        <div className="col-xl-8">

          <div className="card">
            <div className="card-body pt-3">
              
              <ul className="nav nav-tabs nav-tabs-bordered ulcls">

                <li className="nav-item">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>

                

                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                </li>

              </ul>
              <div className="tab-content pt-2">

                <div className="tab-pane fade show active profile-overview" id="profile-overview">
                 

                  <h5 className="card-title">Profile Details</h5>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Full Name</div>
                    <div className="col-lg-9 col-md-8">{userData.name}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Job</div>
                    <div className="col-lg-9 col-md-8">User</div>
                  </div>

                


                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Phone</div>
                    <div className="col-lg-9 col-md-8">{userData.phone}</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">{userData.email}</div>
                  </div>

                </div>

                <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                    <div className="row mb-3">
                      <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div className="col-md-8 col-lg-9">
                        <img src={ProfileImg} alt="Profile"/>
                        <div className="pt-2">
                          <a href="#" className="btn btn-primary btn-sm icn" title="Upload new profile image">
                              <BsCloudUploadFill/>
                          </a>
                          <a href="#" className="btn btn-danger btn-sm icn" title="Remove my profile image">
                          <AiFillDelete/>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="fullName" type="text" className="form-control" id="fullName" value={name} onChange={(e) => setName(e.target.value)}  />
                        {/* onChange={(e) => setName(e.target.value)}  */}
                      </div>
                    </div>

                  

                    

                    <div className="row mb-3">
                      <label for="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="job" type="text" className="form-control" id="Job" value="User"/>
                      </div>
                    </div>

                  

                

                    <div className="row mb-3">
                      <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="phone" type="text" className="form-control" id="Phone" value={phone} 
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="email" type="email" className="form-control" id="Email" value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    

                   

                    
                    

                    <div className="text-center">
                      <button  className="btn btn-primary" onClick={updateUser} >Save Changes</button>
                    </div>
                 

                </div>


                <div className="tab-pane fade pt-3" id="profile-change-password">
                  

                    <div className="row mb-3">
                      <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="password" type="password" className="form-control" id="currentPassword" 
                          onChange={(e) => setOldPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="newpassword" type="password" className="form-control" id="newPassword"
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="renewpassword" type="password" className="form-control" id="renewPassword"
                          onChange={(e) => setconfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <button  className="btn btn-primary" onClick={passwordChangeFun}>Change Password</button>
                    </div>
                

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>


          </div></div></div>



  </>);
};

export default Profile;
