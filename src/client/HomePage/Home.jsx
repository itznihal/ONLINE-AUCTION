import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import { FaBeer } from 'react-icons/fa';
import Img from "../images/values-1.png";
import "./homestyle.scss";



const Home = () => {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>


        <div className="container-fluid nav_bg">
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' data-aos="fade-up" data-aos-delay="200">
                <h1> Bid and sell items with <strong className='brand-name'><br/>Online Auction</strong></h1>

                <h2 className="my-3">
                  An online auction is a service in which auction users or participants sell or bid for products or services via the Internet.
                </h2>
                <div className='mt-3'>
                  <NavLink to="/signup" className='btn-get-started'>
                    Get Started
                  </NavLink>
                </div>

              </div>

              <div className='col-lg-6 order-1 order-lg-2 header-img ' data-aos="fade-up" data-aos-delay="300">
                  <img src={Img} className='img-fluid animated' alt="auction img" />

              </div>
              </div>

            </div>
          </div>
        </div>


      </section>







      {/* Home Section 2 */}



      <div className="container-fluid nav_bg">
          <div className='row'>
            <div className='col-10 mx-auto'>

            <section className="section">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-5" data-aos="fade-up">
            <h2 className="section-heading">A user-friendly website</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="">
            <div className="feature-1 text-center">
              <div className="wrap-icon icon-1">
              <div className='hmicn'>
              <FaBeer/>
              </div>
              </div>
              <h3 className="mb-3">Security</h3>
              <p>Encryption of password will be there. All the details of the product is true 
and valid. The proofs of product must be there. All the valid identities of 
seller and bidder will be there.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-1 text-center">
              <div className="wrap-icon icon-1">
              <div className='hmicn'>
              <FaBeer/>
              </div>
              </div>
              <h3 className="mb-3">Availability</h3>
              <p>The web-app can available 24*7. User can login and register at website at 
any time. Lots of the product will be available only for the decided time by 
seller.</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-1 text-center">
              <div className="wrap-icon icon-1">
              <div className='hmicn'>
              <FaBeer/>
              </div>
              </div>
              <h3 className="mb-3">Flexibility</h3>
              <p>The seller can update/add/delete the product data instantly. As seller make 
any update, the database will be updated. </p>
            </div>
          </div>
        </div>

      </div>
    </section>


{/* Home Section 3 */}



    <section className="section">

      <div className="container">
        <div className="row justify-content-center text-center mb-5" data-aos="fade">
          <div className="col-md-6 mb-5">
            <img src={Img} alt="Auction Image" className="img-fluid"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="step">
              <span className="number">01</span>
              <h3>Create Profile</h3>
              <p>User will be registered successfully and redirected to log in page.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="step">
              <span className="number">02</span>
              <h3>Sign Up</h3>
              <p>User will be registered successfully and redirected to log in page.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="step">
              <span className="number">03</span>
              <h3>Enjoy the app</h3>
              <p>Auction in physical mode, is some kind of difficult if you have to travel 
to auction place. </p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 me-auto">
            <h2 className="mb-4">Create a lot</h2>
            <p className="mb-4">All the valid information related to item for bidding
i.e. lot name, description of the item, category of item, date of bidding, 
minimum price, end time of bidding, payment method, images of produc</p>
            <p><a href="#" className="btn btn-primary">Get Started</a></p>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <img src={Img} alt="Auction Image" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 ms-auto order-2">
            <h2 className="mb-4">Make a bid</h2>
            <p className="mb-4">Customer will see the product detail and if interested in product then 
he/she will make a bid of that product, valid identity proof.</p>
            <p><a href="#" className="btn btn-primary">Get Started</a></p>
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <img src={Img} alt="Auction Image" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>


            </div>
            </div>
            </div>








    </>);
};

export default Home;
