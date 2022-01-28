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
      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
      <h1> <strong className='brand-name'>Bid and sell items with Online Auction</strong></h1>
        <h2 className="my-3">
          An online auction is a service in which auction users or participants sell or bid for products or services via the Internet.
        </h2>
        

      </div>

      <div className='col-lg-6 order-1 order-lg-2 header-img ' data-aos="fade-right" data-aos-delay="800">
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
      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column'>
        <h1> <strong className='brand-name'>Bid and sell items with Online Auction</strong></h1>

        <h2 className="my-3">
          An online auction is a service in which auction users or participants sell or bid for products or services via the Internet.
        </h2>
        

      </div>

      <div className='col-lg-6 order-1 order-lg-1 header-img2 ' data-aos="fade-right" data-aos-delay="800">
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
      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
      <h1> <strong className='brand-name'>Bid and sell items with Online Auction</strong></h1>

        <h2 className="my-3">
          An online auction is a service in which auction users or participants sell or bid for products or services via the Internet.
        </h2>
        

      </div>

      <div className='col-lg-6 order-1 order-lg-2 header-img ' data-aos="fade-right" data-aos-delay="800">
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
          <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"> <div className='fabrsicn'><MdSell/></div></div>
              <h4 className="title"><NavLink to="">Lorem Ipsum</NavLink></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><div className='fabrsicn'><MdLocalShipping/></div></div>
              <h4 className="title"><NavLink to="">Sed ut perspiciatis</NavLink></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><div className='fabrsicn'><AiFillUpCircle/></div></div>
              <h4 className="title"><NavLink to="">Magni Dolores</NavLink></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><div className='fabrsicn'><MdSell/></div></div>
              <h4 className="title"><NavLink to="">Nemo Enim</NavLink></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
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
