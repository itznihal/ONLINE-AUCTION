import React from 'react';
import Img from "../images/values-1.png";
import Img2 from "../images/values-3.png";
import Img3 from "../images/features.png";
import About3 from "../images/about3.jpg";

import About1 from "../images/about1.jpg";

import About4 from "../images/about4.png";
import Team from "../images/team.png";
import Loader from '../Loader/Loader';
import { FcNext } from 'react-icons/fc';
import MetaData from '../MetaData/MetaData';


import "./aboutstyle.scss";
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
    <MetaData title="ABOUT US"></MetaData>
      {/* <h1>Welcome About Page</h1> */}


      <div className="container-fluid nav_bg abtcls">
        <div className='row'>
          <div className='col-10 mx-auto'>


            <section id="values" className="values">

              <div className="container" data-aos="fade-up">

                {/* <header className="section-header">
                  <h2>About Us</h2>
                  <p>Nonprofit Auction Software</p>
                </header> */}


                  <div className="section-title" data-aos="fade-up">
          <h2>About Us</h2>
          <p>Nonprofit Auction Software</p>
        </div>



                <div className="row abtclssection">

                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="box">
                      <img src={About4} className="img-fluid" alt="" />
                      <h3>Mission</h3>
                      <p>Auction in physical mode, is some kind of difficult. People cannot sell product globally.
                        You have to travel
                        to auction place. Through this app, a person with good internet can easily, sell thier product via bidding.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                    <div className="box">
                      <img src={About3} className="img-fluid" alt="" />
                      <h3>Ease of Use</h3>
                      <p>Result can generated very easily through the website only, without third
                        party interruption.All the sellers and bidders are verified by our system.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                    <div className="box">
                      <img src={About1} className="img-fluid" alt="" />
                      <h3>Mordern Web</h3>
                      <p>Our, Web-app is providing a Filter functionality.A
                        customer or bidder can filter it out by their choices</p>
                    </div>
                  </div>

                </div>



              </div>

            </section>


{/* WHY-US */}


<section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">

      <div className="section-title" data-aos="fade-up">
          <h2>FAQ'S</h2>
          <p>Nonprofit Auction Software</p>
        </div>


        <div className="row">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content">
              <h3><strong> We have created a list of common questions that we have received from members</strong></h3>
              <p>
              If you do not find your answer on this page, please Contact Us and we will resolve your queries.
              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span>
Auction & Bid Information Best-Bid <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                    Team BestBid, comes up with a idea to provide a platform for the sellers who want to sell thier product via bidding and want to get the best price. Our team verifies all the users. Team bestbid tries to make this platform 100% secure and safe.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Who can auction the property through Best-Bid <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Any Individual, Institutions, Banks and Government Departments can auction the properties through Best-Bid. Individuals should provide all details that RBS may require in the manner in which it is required. Banks and Institutions can Best-Bid properties under relevant Acts and their rules. Unique user ID and password will be delivered to the Authorised Officer of the Bank/Institution only to ensure security. SLA will be executed between RBS & Institutions.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> 
How does one get the contact information?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    By registration of seller with  their details scheme for the particular property.we got his data and after verification seller data will be available with their Auction ,  When Auction Ends Seller got Bidder information ad well as bid history and user can contact the seller.
                    </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img bgimgctrl" style={{backgroundImage: `url(${Img2})`}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>
        {/* <img src={Img2} className="img-fluid" alt="" /> */}
      </div>
    </section>


    {/* END WHY US */}






            {/*  About Writtern */}
            <section id="about" className="about">
              <div className="container sectionfivecls" data-aos="fade-up">

                <div className="section-title">
                  <h2>Our Values</h2>
                  <p>Nonprofit Auction Software</p>
                </div>

                <div className="row content ourvaluescls">
                  <div className="col-lg-6">
                    <p>
                    <FcNext/>Every day, people build businesses on eAuction. Nonprofit organizations raise vital funds. Entrepreneurs gain new skills and access to new markets where they can turn their dreams and ideas into business success.

                    </p>
                    <p>
                    <FcNext/> eAuction creates inspiring ecommerce experiences for our buyers, sellers and developers. Embracing innovation has been a cornerstone of our growth and customer loyalty over the past 25 years.
                    </p>

                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                    <FcNext/> Greater Giving works exclusively with schools and nonprofits across the nation—offering integrated technologies to help simplify event management, quickly train volunteers, streamline check-in and check-out and raise more funds.
                    </p>
                    <NavLink to="/" className="btn-learn-more">Learn More</NavLink>
                  </div>
                </div>

              </div>
            </section>
            {/*  End About Section */}






          </div>
        </div>
      </div>


    </>
    
    );
};

export default About;
