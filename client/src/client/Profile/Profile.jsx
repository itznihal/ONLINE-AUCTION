import React from 'react';
import "./profilestyle.scss"
import { NavLink } from 'react-router-dom';
import Img from "../images/values-1.png";
import ProfileImg from "../images/profile-icon-png-899.png";
import { AiOutlineUpload , AiFillDelete } from 'react-icons/ai';
import {  BsCloudUploadFill} from 'react-icons/bs';




const Profile = () => {
  return (<>


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
              <h2>Seller Name</h2>
              <h3>Seller</h3>
             
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
                    <div className="col-lg-9 col-md-8">Seller Name</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Job</div>
                    <div className="col-lg-9 col-md-8">Seller</div>
                  </div>

                


                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Phone</div>
                    <div className="col-lg-9 col-md-8">123456789</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">Seller123@gmail.com</div>
                  </div>

                </div>

                <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                  <form>
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
                        <input name="fullName" type="text" className="form-control" id="fullName" value="Seller Name"/>
                      </div>
                    </div>

                  

                    

                    <div className="row mb-3">
                      <label for="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="job" type="text" className="form-control" id="Job" value="Seller"/>
                      </div>
                    </div>

                  

                

                    <div className="row mb-3">
                      <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="phone" type="text" className="form-control" id="Phone" value="123456789"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="email" type="email" className="form-control" id="Email" value="Seller123@gmail.com"/>
                      </div>
                    </div>

                    

                   

                    
                    

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                  </form>

                </div>


                <div className="tab-pane fade pt-3" id="profile-change-password">
                  <form>

                    <div className="row mb-3">
                      <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="password" type="password" className="form-control" id="currentPassword"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="newpassword" type="password" className="form-control" id="newPassword"/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="renewpassword" type="password" className="form-control" id="renewPassword"/>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Change Password</button>
                    </div>
                  </form>

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
