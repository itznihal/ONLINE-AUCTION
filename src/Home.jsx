import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { FaBeer } from 'react-icons/fa';
import Img from "./images/values-1.png"



const Home = () => {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>


        <div className="container-fluid nav_bg">
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
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

              <div className='col-lg-6 order-1 order-lg-2 header-img '>
                  <img src={Img} className='img-fluid animated' alt="auction img" />

              </div>
              </div>

            </div>
          </div>
        </div>


      </section>

    </>);
};

export default Home;
