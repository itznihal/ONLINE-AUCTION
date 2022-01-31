import React from 'react';
import "./servicestyle.scss";

import Img from "../images/values-1.png";
import { NavLink } from 'react-router-dom';
import { MdSell , MdLocalShipping  } from 'react-icons/md';
import {AiFillUpCircle} from 'react-icons/ai';


const Service = () => {
  return (
  <>
     {/* Component 1 */}

     <section id='header1' className='d-flex align-items-center'>


<div className="container-fluid nav_bg">
  <div className='row'>
    <div className='col-10 mx-auto'>
      <div className='row'>
      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' data-aos="fade-right" data-aos-delay="100">
      <h1> <strong className='brand-name'>Bid and sell items with Online Auction</strong></h1>
        <h2 className="my-3">
          An online auction is a service in which auction users or participants sell or bid for products or services via the Internet.
        </h2>
        

      </div>

      <div className='col-lg-6 order-1 order-lg-2 header-img ' data-aos="fade-left" data-aos-delay="200">
          <img src={Img} className='img-fluid animated' alt="auction img" />

      </div>
      </div>

    </div>
  </div>
</div>


</section>

{/* Conponent 2 */}


<section id='header1' className='d-flex align-items-center'>


<div className="container-fluid nav_bg">
  <div className='row'>
    <div className='col-10 mx-auto'>
      <div className='row'>
      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column' data-aos="fade-right" data-aos-delay="300">
        <h1> <strong className='brand-name'>Bid and sell items with Online Auction</strong></h1>

        <h2 className="my-3">
          An online auction is a service in which auction users or participants sell or bid for products or services via the Internet.
        </h2>
        

      </div>

      <div className='col-lg-6 order-1 order-lg-1 header-img2 ' data-aos="fade-left" data-aos-delay="400">
          <img src={Img} className='img-fluid animated' alt="auction img" />

      </div>
      </div>

    </div>
  </div>
</div>


</section>




{/* Component 3 */}



<section id='header1' className='d-flex align-items-center'>


<div className="container-fluid nav_bg">
  <div className='row'>
    <div className='col-10 mx-auto'>
      <div className='row'>
      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' data-aos="fade-rightt" data-aos-delay="500">
      <h1> <strong className='brand-name'>Bid and sell items with Online Auction</strong></h1>

        <h2 className="my-3">
          An online auction is a service in which auction users or participants sell or bid for products or services via the Internet.
        </h2>
        

      </div>

      <div className='col-lg-6 order-1 order-lg-2 header-img ' data-aos="fade-left" data-aos-delay="600">
          <img src={Img} className='img-fluid animated' alt="auction img" />

      </div>
      </div>

    </div>
  </div>
</div>


</section>



{/* My Service Section */}


<div className='row'>
    <div className='col-10 mx-auto'>
      <div className='row'>
    <section id="services" className="services">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>The purpose of the system is to make an auction system online with proper 
security</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"> <div className='fabrsicn'><MdSell/></div></div>
              <h4 className="title"><NavLink to="">Availability</NavLink></h4>
              <p className="description">The web-app can available 24*7. User can login and register at website at 
any time. Lots of the product will be available only for the decided time by 
seller</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><div className='fabrsicn'><MdLocalShipping/></div></div>
              <h4 className="title"><NavLink to="">Flexibility</NavLink></h4>
              <p className="description">The seller can update/add/delete the product data instantly. As seller make 
any update, the database will be updated</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><div className='fabrsicn'><AiFillUpCircle/></div></div>
              <h4 className="title"><NavLink to="">Reliability</NavLink></h4>
              <p className="description">A user-friendly website. Through help/contact section user can get any help 
if needed.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="500">
              <div className="icon"><div className='fabrsicn'><MdSell/></div></div>
              <h4 className="title"><NavLink to="">Security</NavLink></h4>
              <p className="description">Encryption of password will be there. All the details of the product is true 
and valid. The proofs of product must be there. All the valid identities of 
seller and bidder will be there.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    </div>
    </div>
    </div>


     
  </>);
};

export default Service;
