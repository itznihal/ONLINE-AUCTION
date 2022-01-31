import React from 'react';
import Img from "../images/values-1.png";
import Img2 from "../images/values-3.png";
import Img3 from "../images/features.png";


import "./aboutstyle.scss";
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* <h1>Welcome About Page</h1> */}


      <div className="container-fluid nav_bg">
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



                <div className="row">

                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="box">
                      <img src={Img} className="img-fluid" alt="" />
                      <h3>About 1</h3>
                      <p>Auction in physical mode, is some kind of difficult if you have to travel
                        to auction place. Through this app, a person with good internet can easily
                        login and see their near by places where the auctions are holding</p>
                    </div>
                  </div>

                  <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                    <div className="box">
                      <img src={Img2} className="img-fluid" alt="" />
                      <h3>About 2</h3>
                      <p>Result can generated very easily through the website only, without third
                        party interruption.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                    <div className="box">
                      <img src={Img3} className="img-fluid" alt="" />
                      <h3>About 3</h3>
                      <p>Also, this web-app provides a sorting through price and categories. So a
                        customer or bidder can filter it out by their choices</p>
                    </div>
                  </div>

                </div>



              </div>

            </section>



            {/*  About Writtern */}
            <section id="about" className="about">
              <div className="container" data-aos="fade-up">

                <div className="section-title">
                  <h2>Our Values</h2>
                  <p>Nonprofit Auction Software</p>
                </div>

                <div className="row content">
                  <div className="col-lg-6">
                    <p>
                      Every day, people build businesses on eAuction. Nonprofit organizations raise vital funds. Entrepreneurs gain new skills and access to new markets where they can turn their dreams and ideas into business success.

                    </p>
                    <p>
                      eAuction creates inspiring ecommerce experiences for our buyers, sellers and developers. Embracing innovation has been a cornerstone of our growth and customer loyalty over the past 25 years.
                    </p>

                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                      Greater Giving works exclusively with schools and nonprofits across the nation—offering integrated technologies to help simplify event management, quickly train volunteers, streamline check-in and check-out and raise more funds.
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


    </>);
};

export default About;
